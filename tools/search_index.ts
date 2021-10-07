import {listFiles} from "./utils.js";
import path from "path";
import fs from "fs-extra";
import lunr, {Builder} from "lunr";
import {GeneratedDocsMeta} from "./types";

interface Doc {
    location: string,
    title: string,
    text: string;
    key: string;
}

export async function generateIndex(folder: string): Promise<void> {

    const fileList: string[] = [];
    listFiles(folder, fileList, true, ["json"]);

    const docs: Doc[] = [];
    fileList.forEach(file => {
            const content: GeneratedDocsMeta = fs.readJsonSync(file, "utf-8");

            if (!content.path) {
                console.log(file);
                return;
            }
            const pagePath = path.basename(content.path)?.replace(".md", "").replace(/([_\-:])/, " ");
            docs.push({
                title: `${pagePath}`,
                location: content.path,
                text: pagePath,
                key: `${pagePath}-${content.path}-${pagePath}`
            });
            if (content.shortDescription) {
                docs.push({
                    title: `${pagePath}`,
                    location: content.path,
                    text: content.shortDescription,
                    key: `${pagePath}-${content.path}-${content.shortDescription}`
                });
            }
            if (content.searchTerms) {
                content.searchTerms.forEach(value => {
                    docs.push({
                        title: `${pagePath}`,
                        location: content.path,
                        text: value,
                        key: `${pagePath}-${content.path}-${value}`
                    });
                })
            }

        }
    )

    // Finally build the index
    const idx = lunr(function (builder: Builder) {
        builder.ref('key');
        builder.field('location')
        builder.field('title');
        builder.field('text');
        for (const page of docs) {
            builder.add(page);
        }
    });
    // Save the index and the docs for later use!
    fs.writeJSONSync(path.resolve(folder, "../", "search_index.json"), {
        docs,
        idx
    });

}