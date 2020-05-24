const build = async () => {
    let fs = require("fs-extra");
    let path = require("path");
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
    console.log("building");
};


build().then(value => {
    console.log(`Build done!`);
}).catch(reason => {
    console.log(`Build failed! Reason: "${reason}"`);
});