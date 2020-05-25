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


const TestLink = (folder: string, useDocsDir: boolean = false) => {

    let fileList: string[] = [];
    listFiles(folder, fileList);

    let processor = unified().use(markdown, {});
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
                        if (!url.startsWith("/")) {
                            throw `Invalid Link in ${value.substring(path.join(folder, "../").length)}! "${url}" Links should start with "/"!`
                        }
                        // Finally see if the file exists on disk
                        if (!fs.existsSync(path.join(path.join(folder, `${useDocsDir ? `` : `docs`}`), url + ".md"))) {
                            throw `Invalid Link in ${value.substring(path.join(folder, "../").length)}! Could not find "${url}"!`
                        }
                    }
                }

            }

        });
    });
};

const test = async () => {
    let translationsDir = path.join(process.cwd(), `translations`);
    let languages = getLanguages(translationsDir);
    console.log(`Testing "en"`);
    TestLink(path.join(process.cwd(), `docs`), true);
    console.log(`Done testing "en"`);
    languages.forEach(lang => {
        console.log(`Testing "${lang}"`);
        TestLink(path.join(translationsDir, lang));
        console.log(`Done testing "${lang}"`);
    });

};


test().then(value => {
    console.log(`Test done!`);
}).catch(reason => {
    console.log(`Test failed! Reason: "${reason}"`);
});