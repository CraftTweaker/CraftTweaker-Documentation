import GithubSlugger from "github-slugger";
import {Client} from "typesense";
import remarkDirective from "remark-directive";
import {remark} from "remark";

import path from "node:path";
import process from "node:process";
import {CommentToStringVisitor, getAllVersions, getFlatVersions, getPageContent, getPagesFor, getTypesJson, MemberSearchableVisitor, PageModel, type SearchDocument,} from "docs-model";
import remarkSearch from "remark-search";
import remarkGfm from "remark-gfm";

export const generateSearchIndex = async () => {
    if (!process.env.TYPESENSE_API_KEY) {
        console.log("No TYPESENSE_API_KEY provided!");
        return;
    }
    const cwd = process.cwd();
    process.chdir(path.join("packages", "docs-site"));
    const client = new Client({
        nodes: [
            {
                host: "search.blamejared.com",
                port: 443,
                protocol: "https",
            },
        ],
        apiKey: process.env.TYPESENSE_API_KEY,
        connectionTimeoutSeconds: 2,
    });

    const versions = getFlatVersions(getAllVersions());

    console.log("Generating search indices");
    console.time("Generating search indices");

    const slugger = new GithubSlugger();

    const aliases = await client.aliases().retrieve();
    const touchedAliases: string[] = [];
    for (const version of versions) {
        const aliasKey = `docs.blamejared.com_${version}_en`;
        const versionKey = `${aliasKey}_${new Date().getTime()}`;
        touchedAliases.push(aliasKey);

        console.time(version);
        const types = getTypesJson(version);
        console.log(`creating collection ${versionKey}`);
        await client.collections().create({
            name: versionKey,
            fields: [
                { name: "page_url", type: "string", index: false },
                { name: "url", type: "string", index: false },
                { name: "title", type: "string", sort: true, facet: true },
                { name: "type", type: "string", optional: true, facet: true },
                {
                    name: "prefix",
                    type: "string",
                    optional: true,
                    index: false,
                },
                {
                    name: "content",
                    type: "string",
                    optional: true,
                    infix: true,
                },
                {
                    name: "suffix",
                    type: "string",
                    optional: true,
                    index: false,
                },
                { name: "comment", type: "string", optional: true },
            ],
            default_sorting_field: "title",
            enable_nested_fields: false,
        });
        console.log("Collection created");

        const data = [];
        const pagesFor = getPagesFor(version);

        for (const page of pagesFor) {
            const slug = page.path.substring(0, page.path.lastIndexOf("."));
            const pageContent = getPageContent(version, page.path);
            if (page.path.endsWith(".json")) {
                const content: PageModel = PageModel.parsePage(
                    JSON.parse(pageContent),
                );

                const context = {
                    version,
                    slug,
                    types,
                    page: content,
                };
                data.push({
                    page_url: slug,
                    url: slug,
                    title: content.displayName,
                });
                if (content.isBaseTypePage()) {
                    for (const value of Object.values(content.members)) {
                        slugger.reset();
                        const memberSlug = slugger.slug(value.key);
                        for (const member of value.members) {
                            if (member.isSearchable()) {
                                const searchableContent = MemberSearchableVisitor.INSTANCE.visit(member, context)
                                data.push({
                                    page_url: slug,
                                    url: `${slug}#${memberSlug}`,
                                    title: content.displayName,
                                    type: member.getType(),
                                    prefix: searchableContent.prefix,
                                    content: searchableContent.content,
                                    suffix: searchableContent.suffix,
                                    comment: member.comment?.accept(CommentToStringVisitor.INSTANCE),
                                });
                            }
                        }
                    }
                }
            } else if (page.path.endsWith(".md")) {
                data.push({
                    page_url: slug,
                    url: slug,
                    title: page.name,
                });
                const searchableContent: Record<string, SearchDocument[]> = {};
                const markdown = remark()
                    .use(remarkGfm)
                    .use(remarkDirective)
                    .use(remarkSearch, { slug, page, searchableContent });
                await markdown.process(pageContent);
                for (const key of Object.keys(searchableContent)) {
                    for (const searchDoc of searchableContent[key]) {
                        data.push(searchDoc);
                    }
                }
            }
        }
        if (data.length > 0) {
            await client.collections(versionKey).documents().import(data);
        }

        await client.aliases().upsert(aliasKey, {
            collection_name: versionKey,
        });
        console.timeEnd(version);
    }
    console.log("Pruning Collections");
    console.time("pruning");
    for (const alias of aliases.aliases) {
        if (touchedAliases.includes(alias.name)) {
            const collection = client.collections(alias.collection_name);
            if (await collection.exists()) {
                await client.collections(alias.collection_name).delete();
            }
        }
    }
    console.timeEnd("pruning");
    console.log("Done Pruning Collections");
    console.timeEnd("Generating search indices");
    process.chdir(cwd);
};
