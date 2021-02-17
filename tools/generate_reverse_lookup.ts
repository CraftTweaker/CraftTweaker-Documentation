import {walk} from "./util";

let result = require('dotenv').config();
if (result.error) {
    throw result.error;
}
let fs = require("fs-extra");
let path = require("path");



const generate = async () => {
    let reversed = walk(JSON.parse(fs.readFileSync(path.join(process.cwd(), "docs.json"), "utf-8"))["nav"], {}, [])
    fs.writeJSONSync(path.join(process.cwd(), "docs_reverse_lookup.json"), reversed);
    console.log(`Done building a reverse lookup`);
};


generate().then(value => {
    console.log(`Generation done!`);
}).catch(reason => {
    console.log(`Generation failed! Reason: "${reason}"`);
    process.exit(1);
});
