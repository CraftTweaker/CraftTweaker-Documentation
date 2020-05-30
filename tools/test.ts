import {Node} from "unist";

let fs = require("fs-extra");
let path = require("path");

let unified = require('unified');
let markdown = require('remark-parse');
let vfile = require('to-vfile');
import {
    getLanguages,
    listFiles
} from "./util";


const testLinks = (folder: string, useDocsDir: boolean = false) => {

    let fileList: string[] = [];
    listFiles(folder, fileList);

    let processor = unified().use(markdown, {});
    let linkError: boolean = false;
    fileList.forEach(value => {
        let processedFile = processor.parse(vfile.readSync(value));
        processedFile.children.forEach((child: Node) => {
            if (child.type === "paragraph") {
                // @ts-ignore
                for (let childrenKey in child.children) {
                    // @ts-ignore
                    let childObj = child.children[childrenKey];
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
                        let filePath = path.join(path.join(folder, `${useDocsDir ? `` : `docs`}`), url + (url.endsWith(".md") ? `` : ".md"));
                        let filePathNoSlash = path.join(path.join(folder, `${useDocsDir ? `` : `docs`}`), url.substring(0, url.length - 1) + ".md");
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

        });
    });
    if (linkError) {
        throw "Link check failed!";
    }

};

const test = async () => {
    let translationsDir = path.join(process.cwd(), `translations`);
    let languages = getLanguages(translationsDir);
    console.log(`Testing "en"`);
    try {
        testLinks(path.join(process.cwd(), `docs`), true);
    } catch (e) {
        console.log(e);
    }

    console.log(`Done testing "en"`);
    languages.forEach(lang => {

        try {
            console.log(`Testing "${lang}"`);
            testLinks(path.join(translationsDir, lang));
            console.log(`Done testing "${lang}"`);
        } catch (e) {
            console.log(e);
        }
    });

};


test().then(value => {
    console.log(`Test done!`);
}).catch(reason => {
    console.log(`Test failed! Reason: "${reason}"`);
    process.exit(1);
});
