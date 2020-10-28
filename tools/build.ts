import {Builder} from "lunr";
import {Node} from "unist";
import {
    getLanguages,
    listFiles,
    walk
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

interface Doc {
    location: string,
    title: string,
    text: string
}


const buildIndex = (folder: string) => {

    let fileList: string[] = [];
    listFiles(folder, fileList);

    let processor = unified().use(markdown, {});
    let docs: Doc[] = [];
    let linkError:boolean = false;
    fileList.forEach(value => {
        let processedFile = processor.parse(vfile.readSync(value));
        processedFile.children.forEach((child: Node) => {
            // Check headers first, then paragraphs > text
            // @ts-ignore
            if (child.type === "heading" && child.depth < 4) {
                // @ts-ignore
                for (let childrenKey in child.children) {
                    // @ts-ignore
                    let childrenObj = child.children[childrenKey];
                    if (!childrenObj.value) {
                        continue;
                    }
                    docs.push({
                        title: childrenObj.value,
                        location: `${value}#${childrenObj.value.replace(/(\W|\s)/gi, "_")}`,
                        text: childrenObj.value
                    });
                }
            } else {
                if (child.type === "paragraph") {
                    // @ts-ignore
                    for (let childrenKey in child.children) {
                        // @ts-ignore
                        let childObj = child.children[childrenKey];
                        docs.push({
                            title: childObj.value,
                            location: value,
                            text: childObj.value
                        });
                        if (childObj.type === "link") {
                            let url = childObj.url;
                            // We aren't going to check external site links, seems a bit too much. Maybe in the future we can just send a get request to make sure it returns 200 though
                            if (url.startsWith("http")) {
                                continue;
                            }
                            // We can't really check this nicely, also I don't think we have any links that use this, but future proofing
                            if (url.indexOf("#") !== -1) {
                                // Same page link, not something we're looking for
                                if (url.startsWith("#")) {
                                    continue;
                                } else {
                                    // Lets try and make sure the base file exists at-least
                                    url = url.substring(0, url.indexOf("#"));
                                }
                            }
                            // Links should start with a "/", just makes things easier to handle, and all our current links pass this check
                            if (!url.startsWith("/") && !url.startsWith("../")) {
                                console.error(`Invalid Link in ${value.substring(path.join(folder, "../").length)}! "${url}" Links should start with "/"!`);
                                linkError = true;
                                continue;
                            }
                            // Finally see if the file exists on disk
                            let filePath = path.join(path.join(folder, "docs"), url + (url.endsWith(".md") ? `` : ".md"));
                            let filePathNoSlash = path.join(path.join(folder, "docs"), url.substring(0, url.length - 1) + ".md");
                            if (url.indexOf("../") !== -1) {
                                filePath = path.resolve(path.join(value, url + ".md"));
                                filePathNoSlash = path.resolve(path.join(value, url.substring(0, url.length - 1) + ".md"));
                            }
                            if (!fs.existsSync(filePath)) {
                                if (url.endsWith("/")) {
                                    if (!fs.existsSync(filePathNoSlash)) {
                                        console.error(`Invalid Link in ${value.substring(path.join(folder, "../").length)}! Could not find "${url}" or "${url.substring(0, url.length - 1)} tried in: ${filePath} and ${filePathNoSlash}"!`)
                                        linkError = true;
                                    }
                                } else {
                                    console.error(`Invalid Link in ${value.substring(path.join(folder, "../").length)}! Could not find "${url} tried in: ${filePath}"!`)
                                    linkError = true;
                                }

                            }
                        }
                    }

                }
            }

        });
    });
    if(linkError){
        throw "Link check failed!";
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

};

const build = async () => {
    let buildsDir = path.join(process.cwd(), `build`);
    let translationsDir = path.join(process.cwd(), `translations`);
    console.log(`Creating or emptying build directory!`);
    fs.emptyDirSync(buildsDir);
    console.log(`Copying translations!`);
    fs.copySync(translationsDir, buildsDir);
    fs.removeSync(path.join(buildsDir, `en`));
    fs.mkdirsSync(path.join(buildsDir, path.join("en", "docs")));
    fs.copySync("docs", path.join(buildsDir, path.join("en", "docs")));
    fs.copySync("mkdocs.yml", path.join(buildsDir, path.join(`en`, "mkdocs.yml")));
    fs.copySync("docs.json", path.join(buildsDir, path.join(`en`, "docs.json")));
    let languages = getLanguages(buildsDir);
    console.log("Building Search indices and reverse doc lookup");
    languages.forEach(lang => {
        buildIndex(path.join(buildsDir, lang));
        console.log(`Done building an index for: "${lang}"`);

        let reversed = walk(JSON.parse(fs.readFileSync(path.join(path.join(buildsDir, lang), "docs.json"), "utf-8"))["nav"], {}, [])
        fs.writeJSONSync(path.join(path.join(buildsDir, lang), "docs_reverse_lookup.json"), reversed);
        console.log(`Done building a reverse lookup for: "${lang}"`);
    });

    console.log("Copying files to folders");
    let docsPath = path.join(process.env.docsSiteDir, process.env.VERSION);
    if (fs.existsSync(docsPath)) {
        // can't remove a non empty dir?
        fs.emptyDirSync(docsPath);
        fs.rmdirSync(docsPath);
    }
    fs.mkdirSync(docsPath);
    fs.copySync(buildsDir, docsPath);
    console.log("Copied files!")
};


build().then(value => {
    console.log(`Build done!`);
}).catch(reason => {
    console.log(`Build failed! Reason: "${reason}"`);
    process.exit(1);
});
