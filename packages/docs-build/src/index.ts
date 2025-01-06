import fs from "fs-extra";
import path from "node:path";

import {BUILD_DIR, checkForDuplicates, clearDirectory, DIST_DIR, DOCS_OUT_DIR, doJsonMerge, EXPORTED_DIR, getVersionsInDir, listFiles, OUT_DIR, walk, walkReversed,} from "./util";
import type {Docs, PageMeta, Types} from "docs-model";
import remarkIUV from "remark-inject-url-version";
import remarkDirective from "remark-directive";
import {remark} from "remark";
import merge from "deepmerge";
import {generateSearchIndex} from "docs-search"
console.time("Total");
process.chdir(path.join("..", ".."));

clearDirectory(BUILD_DIR);
clearDirectory(DIST_DIR);
await prepareBuildFolders();
await prepareExportedBuildFolders();
await mergeExported();
await processMarkdown();
await supplementMeta();
await generateSearchIndex();
await finalize();
console.timeEnd("Total");

/**
 * Creates the out directory and copies the base 'docs' folder to it.
 */
async function prepareBuildFolders(): Promise<void> {
    console.time("prepareBuildFolders");
    console.log("Starting build folder preparation");

    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.copySync("docs", path.join(OUT_DIR));

    console.log("Finished build folder preparation");
    console.timeEnd("prepareBuildFolders");
}

/**
 * Creates the exported out directory and copies the base 'docs_exported' folder to it.
 */
async function prepareExportedBuildFolders(): Promise<void> {
    console.time("prepareExportedBuildFolders");
    console.log("Starting exported build folder preparation");

    fs.mkdirSync(EXPORTED_DIR, { recursive: true });
    fs.copySync("docs_exported", EXPORTED_DIR);

    console.log("Finished exported build folder preparation");
    console.timeEnd("prepareExportedBuildFolders");
}

/**
 * Loops through all the versions in the exported dir
 * loops through all the folders in those version folders looking for a docs folder and docs.json file.
 * If both files are found, check and report duplicate files, then copy the docs folder to the output directory.
 * Merge the 'docs.json' files
 */
async function mergeExported(): Promise<void> {
    console.time("mergeExported");
    console.log("Starting merging");

    const versions = getVersionsInDir(EXPORTED_DIR);

    for (const version of versions) {
        console.log(`Copying '${version}' to output directory`);
        const versionDir = path.join(EXPORTED_DIR, version);
        const exportsSubDirs: string[] = fs.readdirSync(versionDir);
        const docJsons: string[] = [];

        const mainJson = path.join(OUT_DIR, version, "docs.json");
        if (!fs.existsSync(mainJson)) {
            console.error(
                `'${version}' does not have a main 'docs.json' in directory '${mainJson}': this is a serious error!`,
            );
            continue;
        }


        for (const subDirectory of exportsSubDirs) {
            const subDir = path.join(versionDir, subDirectory);
            const docsDir = path.join(subDir, "docs");
            const docsJson = path.join(subDir, "docs.json");

            if (!fs.existsSync(docsDir)) {
                console.error(
                    `${subDir} does not have a 'docs' folder, skipping.`,
                );
                continue;
            }
            if (!fs.existsSync(docsJson)) {
                console.error(
                    `${subDir} does not have a 'docs.json' file, skipping.`,
                );
                continue;
            }

            const dstDir = path.join(OUT_DIR, version, "content");
            const dupes = checkForDuplicates(docsDir, dstDir, true);
            if (dupes.length > 0) {
                console.error(
                    `Duplicate files were identified for '${docsDir}': docs merging will ignore these files!`,
                );
                console.error(`Found files: ${dupes}`);
            }

            fs.copySync(docsDir, dstDir, {
                overwrite: false,
                errorOnExist: false,
            });

            docJsons.push(docsJson);
        }

        // Push this last so it can define the layout for the merge
        docJsons.push(mainJson);

        console.log(`Merging 'docs.json' files for '${version}'`);
        const mergedJson: Docs = doJsonMerge(docJsons);
        fs.writeFileSync(mainJson, JSON.stringify(mergedJson));
    }

    console.log("Finished merging");
    console.timeEnd("mergeExported");
}

/**
 * Loops through all the markdown files in the out directory and processes them with remark, injecting the version number into urls
 */
async function processMarkdown(): Promise<void> {
    console.time("processMarkdown");
    console.log("Starting processing markdown");

    const fileList = listFiles(OUT_DIR, [], true, ["md"]);

    const filesForVersions = fileList.reduce<Record<string, string[]>>(
        (acc, current) => {
            const version = path.relative(OUT_DIR, current).split(path.sep)[0];
            if (!acc[version]) {
                acc[version] = [];
            }
            const files = acc[version];
            files.push(current);
            return acc;
        },
        {},
    );
    for (const version of Object.keys(filesForVersions)) {
        const markdown = remark().use(remarkIUV, version).use(remarkDirective);
        for (const value of filesForVersions[version].values()) {
            fs.writeFileSync(
                value,
                await markdown
                    .process(fs.readFileSync(value, "utf-8"))
                    .then((file) => file.value),
            );
        }
    }
    console.log("Finished processing markdown");
    console.timeEnd("processMarkdown");
}

/**
 * Generates the meta for each page, creating json files for each markdown file, adding the meta object to json files and adding everything to the types.json
 */
async function supplementMeta(): Promise<void> {
    console.time("supplementMeta");
    console.log("Starting supplementing docs meta");

    for (const version of getVersionsInDir(OUT_DIR)) {
        console.log(`Started ${version}`);
        const docsJsonPath = path.join(OUT_DIR, version, "docs.json");
        const typesJsonPath = path.join(OUT_DIR, version, "types.json");
        const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, "utf-8"));
        const paths = walk(docsJson, []);
        const reversePaths = walkReversed(docsJson.nav, {}, []);
        const typesJson: Types = fs.existsSync(typesJsonPath)
            ? JSON.parse(fs.readFileSync(typesJsonPath, "utf-8"))
            : {};

        paths.forEach((obj, i) => {
            let pageMeta: PageMeta = {
                folders: reversePaths[obj.path],
                current: obj,
                path: obj.path,
            };
            // We want this to run last, so we can override the files if they (incorrectly) contain the information
            const fillNav = (pageMeta: PageMeta, index: number) => {
                if (index > 0) {
                    pageMeta.previous = { ...paths[index - 1] };
                    pageMeta.previous.path = pageMeta.previous.path.replace(
                        /\.(md|json)/,
                        "",
                    );
                }
                if (index < paths.length - 1) {
                    pageMeta.next = { ...paths[index + 1] };
                    pageMeta.next.path = pageMeta.next.path.replace(
                        /\.(md|json)/,
                        "",
                    );
                }
            };

            if (obj.path.endsWith(".md")) {
                const docsMetaJsonPath = obj.path.replace(/\.md/, ".json");
                const fullMetaJsonPath = path.join(
                    OUT_DIR,
                    version,
                    "content",
                    docsMetaJsonPath,
                );
                if (fs.existsSync(fullMetaJsonPath)) {
                    const docsMetaJson = JSON.parse(
                        fs.readFileSync(fullMetaJsonPath, "utf-8"),
                    );
                    pageMeta = merge(pageMeta, docsMetaJson);
                }
                fillNav(pageMeta, i);
                fs.writeJSONSync(fullMetaJsonPath, pageMeta);
            } else if (obj.path.endsWith(".json")) {
                const fullJsonPath = path.join(
                    OUT_DIR,
                    version,
                    "content",
                    obj.path,
                );
                const pageJson = JSON.parse(
                    fs.readFileSync(fullJsonPath, "utf-8"),
                );
                pageMeta.path = `${pageJson.key}.json`;
                pageJson.meta = merge(pageMeta, pageJson.meta ?? {});
                fillNav(pageJson.meta, i);
                fs.writeJSONSync(fullJsonPath, pageJson);
                //TODO find a way to not hardcode it
                if (
                    pageJson.kind === "type" ||
                    pageJson.kind === "event" ||
                    pageJson.kind === "enum"
                ) {
                    if (!typesJson[pageJson.type.key]) {
                        typesJson[pageJson.type.key] = {
                            keys: [],
                        };
                    }
                    typesJson[pageJson.type.key].keys.push(pageJson.key);
                }
            }
        });
        fs.writeFileSync(
            path.join(OUT_DIR, version, "types.json"),
            JSON.stringify(typesJson),
        );
        console.log(`Finished ${version}`);
    }
    console.log("Finished supplementing docs meta");
    console.timeEnd("supplementMeta");
}

async function finalize(): Promise<void> {
    console.time("finalize");
    console.log("Starting finalization");
    const outDir = OUT_DIR;
    const docsOutDir = DOCS_OUT_DIR;
    fs.mkdirsSync(docsOutDir);
    const versions = getVersionsInDir(outDir);
    for (const version of versions) {
        console.log(`Finalizing pages ${version}`);
        const verlangDir = path.join(docsOutDir, version);
        fs.mkdirsSync(verlangDir);
        fs.copySync(path.join(outDir, version), verlangDir);
        console.log(`Finalized pages ${version}`);
    }
    fs.copyFileSync(path.join(outDir, "versions.json"), path.join(docsOutDir, "versions.json"))

    const siteDir = path.join("packages", "docs-site");
    const finalDir = path.join(siteDir, "src", "docs");
    clearDirectory(finalDir);
    fs.copySync(docsOutDir, finalDir);
    const publicDir = path.join(siteDir, "public");
    for (const version of versions) {
        console.log(`Finalizing public /${version}`);
        clearDirectory(path.join(publicDir, version));
        const verlangDir = path.join(publicDir, version, "en");
        fs.mkdirsSync(verlangDir);
        const files: string[] = [];
        listFiles(path.join(outDir, version), files, true);
        console.time("finalize-public");
        console.log(`Copying files ${version}`);
        for (const file of files) {
            const newFilePath = path
                .relative(path.join(outDir, version), file)
                .replace(`content${path.sep}`, "");
            const dest = path.join(publicDir, version, "en", newFilePath);
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.copyFileSync(file, dest);
        }
        console.log(`Copied files ${version}`);
        console.timeEnd("finalize-public");
        console.log(`Finalized public ${version}`);
    }
    console.log("Finished finalization");
    console.timeEnd("finalize");
}
