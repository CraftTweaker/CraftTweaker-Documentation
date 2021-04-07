import {Builder} from "lunr";
import {Node} from "unist";
import {
    getLanguages,
    listFiles,
    walk,
    checkForDuplicates
} from "./util";


let result = require('dotenv').config();
if (result.error) {
    throw result.error;
}
let fs = require("fs-extra");
let path = require("path");
let lunr = require("lunr");

let unified = require('unified');
let markdown = require('remark-parse');
let vfile = require('to-vfile');
let mergeJson = require("merge-json");
let GithubSlugger = require('github-slugger');
let slugger = new GithubSlugger()


interface Doc {
    location: string,
    title: string,
    text: string
}

const buildIndex = (folder: string) => {

        let fileList: string[] = [];
        listFiles(folder, fileList, true, ["md"]);

        let processor = unified().use(markdown, {});
        let docs: Doc[] = [];
        let linkError: boolean = false;
        fileList.forEach(file => {
                let processedFile = processor.parse(vfile.readSync(file));
                processedFile.children.forEach((child: Node) => {
                    slugger.reset()
                    // Check headers first, then paragraphs > text
                    // @ts-ignore
                    if (child.type === "heading" && child.depth > 1 && child.depth < 4) {
                        // @ts-ignore
                        for (let childrenKey in child.children) {
                            // @ts-ignore
                            let childrenObj = child.children[childrenKey];
                            if (!childrenObj.value) {
                                continue;
                            }
                            docs.push({
                                title: childrenObj.value,
                                location: `${file}#${slugger.slug(childrenObj.value)}`,
                                text: childrenObj.value
                            });
                        }
                    } else if (child.type === "paragraph") {
                        // @ts-ignore
                        for (let childrenKey in child.children) {
                            // @ts-ignore
                            let childObj = child.children[childrenKey];
                            if (["text"].indexOf(childObj.type) !== -1) {

                                let value = childObj.value;

                                if (value.startsWith(":::group")) {
                                    let groupName = value.split(":::group{name=")[1];
                                    if (groupName.startsWith("\"")) {
                                        groupName = groupName.substring(1).replace("\"}", "");
                                    } else {
                                        groupName = groupName.replace("}", "");
                                    }
                                    docs.push({
                                        title: groupName,
                                        location: file,
                                        text: groupName
                                    });
                                }
                            }
                            if (childObj.type === "link") {
                                let url = childObj.url;
                                // We aren't going to check external site links, seems a bit too much. Maybe in the future we can just send a get request to make sure it returns 200 though
                                if (url.startsWith("http")) {
                                    continue;
                                }
                                // We can't really check this nicely, also I don't think we have any links that use this, but future proofing
                                // Same page link, not something we're looking for, so check if it doesn't start with #
                                if (url.indexOf("#") > 0) {

                                    // Lets try and make sure the base file exists at-least
                                    url = url.substring(0, url.indexOf("#"));
                                }
                                // Links should start with a "/", just makes things easier to handle, and all our current links pass this check
                                if (!url.startsWith("/") && !url.startsWith("../")) {
                                    console.error(`Invalid Link in ${file.substring(path.join(folder, "../").length)}! "${url}" Links should start with "/"!`);
                                    linkError = true;
                                    continue;
                                }
                                // Finally see if the file exists on disk
                                let filePath = path.join(path.join(folder, "docs"), url + (url.endsWith(".md") ? `` : ".md"));
                                let filePathNoSlash = path.join(path.join(folder, "docs"), url.substring(0, url.length - 1) + ".md");
                                if (url.indexOf("../") !== -1) {
                                    filePath = path.resolve(path.join(file, url + ".md"));
                                    filePathNoSlash = path.resolve(path.join(file, url.substring(0, url.length - 1) + ".md"));
                                }
                                if (!fs.existsSync(filePath)) {
                                    if (url.endsWith("/")) {
                                        if (!fs.existsSync(filePathNoSlash)) {
                                            console.error(`Invalid Link in ${file.substring(path.join(folder, "../").length)}! Could not find "${url}" or "${url.substring(0, url.length - 1)} tried in: ${filePath} and ${filePathNoSlash}"!`)
                                            linkError = true;
                                        }
                                    } else {
                                        console.error(`Invalid Link in ${file.substring(path.join(folder, "../").length)}! Could not find "${url} tried in: ${filePath}"!`)
                                        linkError = true;
                                    }

                                }
                            }
                        }

                    } else if (child.type === "table") {
                        let skippedHeader = false;
                        // @ts-ignore
                        for (let childrenKey in child.children) {
                            // @ts-ignore
                            let row = child.children[childrenKey];
                            if (row.type === "tableRow") {
                                if (!skippedHeader) {
                                    skippedHeader = true;
                                    continue;
                                }
                                // @ts-ignore
                                for (let cellKey in row.children) {
                                    // @ts-ignore
                                    let cell = row.children[cellKey];
                                    let cellValue = cell.children[0];
                                    if (typeof cellValue === "undefined" || cellValue.type !== "text") {
                                        continue;
                                    }
                                    docs.push({
                                        title: cellValue.value,
                                        location: file,
                                        text: cellValue.value
                                    });

                                }

                            }
                        }
                    }


                });
            }
        )
        ;
        if (linkError) {
            console.log(new Error("Link check failed!"));
        }
// Convert to relative links that we can use
        docs = docs.map(value => {
            return {
                text: value.title,
                title: value.text,
                location: value.location.substring(folder.length + "/docs".length)
            };
        });
// Finally build the index
        let idx = lunr(function (builder: Builder) {
            builder.ref('location');
            builder.field('title');
            builder.field('text');

            for (let page of docs) {
                builder.add(page);
            }
        });
// Save the index and the docs for later use!
        fs.writeJSONSync(path.join(folder, "search_index.json"), {
            docs,
            idx
        });

    }
;

const performDocumentationMerge = (buildsDir: string, exportedDocsDir: string, translationsDir: string, exportedTranslationsDir: string, languages: string[]): void => {
    const findDirectoryForLang = (lang: string, docs: string, translation: string): string => {
        if (lang == `en`) return docs;
        return path.join(translation, path.join(lang, `docs_exported`));
    };
    const findUserJsonForLang = (lang: string, translation: string): string => {
        if (lang == `en`) return `docs.json`;
        return path.join(translation, path.join(lang, `docs.json`))
    }

    getLanguages(buildsDir).forEach(lang => {
        let docsExportedDirectoryForLang = findDirectoryForLang(lang, exportedDocsDir, exportedTranslationsDir);

        console.log(`Copying translated files for language '${lang}' to output directory`);
        let exportsSubDirs: string[] = fs.readdirSync(docsExportedDirectoryForLang);
        let languageJsons: string[] = [];
        exportsSubDirs.forEach(subDirectory => {
            let docsDir = path.join(docsExportedDirectoryForLang, path.join(subDirectory, "docs"));
            let docsJson = path.join(docsExportedDirectoryForLang, path.join(subDirectory, "docs.json"));

            if (fs.existsSync(docsDir)) {
                let dstDir = path.join(buildsDir, path.join(lang, "docs"));
                let dupes = checkForDuplicates(docsDir, dstDir, true);
                if (dupes.length > 0) {
                    console.error(`Duplicate files were identified for language ${lang}: docs merging will ignore these files!`);
                    console.error(`Found files: ${dupes}`);
                }

                fs.copySync(docsDir, path.join(buildsDir, path.join(lang, "docs")), {overwrite: false, errorOnExist: false});

                if (fs.existsSync(docsJson)) {
                    languageJsons.push(docsJson);
                } else {
                    console.error(`Directory ${docsDir} does not define any 'docs.json' files: check your automated export script!`);
                }
            } else {
                console.log(`Subdirectory ${subDirectory} does not host docs for language ${lang}: skipping`);
            }
        });

        let mainJson = findUserJsonForLang(lang, translationsDir);
        if (fs.existsSync(mainJson)) {
            languageJsons.push(findUserJsonForLang(lang, translationsDir));
        } else {
            console.error(`Language ${lang} does not define a main 'docs.json' in directory ${mainJson}: this is a serious error!`);
        }

        console.log(`Merging 'docs.json' files for language '${lang}': found ${languageJsons.length} files`);
        let mergedJson: any = doJsonMerge(languageJsons);
        fs.writeFileSync(path.join(buildsDir, path.join(lang, "docs.json")), JSON.stringify(mergedJson));
    });
};

const doJsonMerge = (jsonPaths: string[]): any => {
    let json: any = {};
    jsonPaths.reverse().forEach((path: string) => {
        let jsonText = fs.readFileSync(path, 'utf8');
        json = mergeJson.merge(json, JSON.parse(jsonText));
        console.log(`Merged file '${path}'`);
    });
    return json;
}

const build = async () => {
    let buildsDir = path.join(process.cwd(), `build`);
    let exportedDocsDir = path.join(process.cwd(), `docs_exported`);
    let translationsDir = path.join(process.cwd(), `translations`);
    let exportedTranslationsDir = path.join(process.cwd(), `translations_exported`);

    console.log(`Creating or emptying build directory!`);
    fs.emptyDirSync(buildsDir);

    console.log(`Copying translations!`);
    fs.copySync(translationsDir, buildsDir);
    fs.removeSync(path.join(buildsDir, `en`));
    fs.mkdirsSync(path.join(buildsDir, path.join("en", "docs")));
    fs.copySync("docs", path.join(buildsDir, path.join("en", "docs")));
    fs.copySync("docs.json", path.join(buildsDir, path.join("en", "docs.json")));
    console.log(`Copied translations!`);

    let languages = getLanguages(buildsDir);

    console.log("Merging automated export files");
    if (!fs.existsSync(exportedDocsDir) || !fs.existsSync(exportedTranslationsDir)) {
        console.log(`One or more target directories '${exportedDocsDir}', '${exportedTranslationsDir}' weren't found: skipping merging`);
    } else {
        performDocumentationMerge(buildsDir, exportedDocsDir, translationsDir, exportedTranslationsDir, languages);
    }

    console.log("Building Search indices and reverse index lookup");
    languages.forEach(lang => {
        buildIndex(path.join(buildsDir, lang));
        console.log(`Done building an index for: "${lang}"`);

        let reversed = walk(JSON.parse(fs.readFileSync(path.join(path.join(buildsDir, lang), "docs.json"), "utf-8"))["nav"], {}, [])
        fs.writeJSONSync(path.join(path.join(buildsDir, lang), "docs_reverse_lookup.json"), reversed);
        console.log(`Done building a reverse lookup for: "${lang}"`);
    });

    console.log("Copying files to folders");
    if (process.env.docsSiteDir === undefined || process.env.VERSION === undefined) {
        console.log(`Unable to deploy build because variables are missing! docsSiteDir is '${process.env.docsSiteDir}', VERSION is '${process.env.VERSION}'`);
    } else {
        let docsPath = path.join(process.env.docsSiteDir, process.env.VERSION);
        if (fs.existsSync(docsPath)) {
            // can't remove a non empty dir?
            fs.emptyDirSync(docsPath);
            fs.rmdirSync(docsPath);
        }
        fs.mkdirSync(docsPath);
        fs.copySync(buildsDir, docsPath);
        console.log("Copied files!")
    }
};


build().then(_value => {
    console.log(`Build done!`);
}).catch(reason => {
    console.error(`Build failed! Reason: "${reason}"`);
    console.error(reason.stack);
    process.exit(1);
});
