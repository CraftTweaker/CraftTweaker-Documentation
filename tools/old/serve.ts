import {spawn} from "child_process";

process.chdir("Docs-Site/")
const ls = spawn("npm run-script serve", {shell: true});

ls.stdout.on("data", data => {
    console.log(`${data}`);
});

ls.stderr.on("data", data => {
    console.log(`${data}`);
});

ls.on('error', (error) => {
    console.log(`${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});