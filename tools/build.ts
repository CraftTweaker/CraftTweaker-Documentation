import {build, clearDirectory, downloadBuild, extractFile, getClient, getCrowdinToken, getDocsOutDir, getExportedDir, getFinishedBuild, getLanguages, getOutDir, getTranslatedVersions, getTranslatedVersionsDir, getTranslationDir, getVersions, getVersionsInDir, isBuildInProgress, listFiles, mergeExportedDocs, sleep, walk, walkReversed} from "./utils.js";
import fs from 'fs-extra';
import path from "path";
import {GeneratedDocsMeta} from "./types";
import merge from "deepmerge";
import {generateIndex} from "./search_index.js";

async function prepareBuildFolders(): Promise<void> {
    console.time(`prepareBuildFolders`)
    console.log("Starting build folder preparation")

    fs.mkdirSync(getOutDir(), {recursive: true});
    const versions = getVersions();
    versions.forEach(version => {
        fs.copySync(path.join("docs", version), path.join(getOutDir(), "en", version))
    })
    console.log("Finished build folder preparation")
    console.timeEnd(`prepareBuildFolders`)
}

async function prepareExportedBuildFolders(): Promise<void> {
    console.time(`prepareExportedBuildFolders`)
    console.log("Starting exported build folder preparation")
    fs.mkdirsSync(getExportedDir());
    const versions = getVersions(true);
    versions.forEach(version => {
        fs.copySync(path.join("docs_exported", version), path.join(getExportedDir(), "en", version))
    })
    console.log("Finished exported build folder preparation")
    console.timeEnd(`prepareExportedBuildFolders`)
}

async function download_translations(): Promise<void> {
    console.time(`download_translations`)
    console.log("Starting downloading translations")
    const client = getClient()

    let buildStatus = await isBuildInProgress(client)
    if (!buildStatus.isBuilding) {
        console.log("Attempting Crowdin build");
        try {
            await build(client);
        } catch (e) {
            // no-op
        }
        buildStatus = await isBuildInProgress(client);
        if (buildStatus.isBuilding) {
            console.log("Creating new Crowdin build");
        } else {
            console.log("Crowdin build already completed");
        }

    }

    while (buildStatus.isBuilding) {
        console.log(`Waiting 10 seconds for build to finish. Progress: ${buildStatus.progress}%`);
        await sleep(10000);
        buildStatus = await isBuildInProgress(client);
        if (!buildStatus.isBuilding) {
            console.log("Crowdin build complete");
        }
    }

    // At this point we should have a complete build

    const finishedBuild = await getFinishedBuild(client);
    console.time(`download_build`)
    await downloadBuild(client, finishedBuild.data.id)
    console.timeEnd(`download_build`)
    await extractFile(path.join(process.cwd(), "build", "tmp", "translations.zip"), path.join(process.cwd(), "build", "tmp", "translations"))

    console.log("Finished downloading translations")
    console.timeEnd(`download_translations`)
}

async function copyTranslations(): Promise<void> {
    console.time(`copyTranslations`)
    console.log("Starting copying translations")
    fs.mkdirSync(getOutDir(), {recursive: true});
    const languages = fs.readdirSync(getTranslationDir());
    languages.forEach(language => {
        fs.mkdirsSync(path.join(getOutDir(), language))
        const versions = getTranslatedVersions(language);
        versions.forEach(version => {
            console.log(`Started copying ${language}/${version}`)
            fs.copySync(path.join(getTranslatedVersionsDir(language), version), path.join(getOutDir(), language, version))
            console.log(`Finished copying ${language}/${version}`)
        })

    })
    console.log("Finished copying translations");
    console.timeEnd(`copyTranslations`)
}

async function copyExportedTranslations(): Promise<void> {
    console.time(`copyExportedTranslations`)
    console.log("Starting copying exported translations")
    fs.mkdirsSync(getExportedDir());
    const languages = fs.readdirSync(getTranslationDir(true));
    languages.forEach(language => {
        fs.mkdirsSync(path.join(getExportedDir(), language))
        const versions = getTranslatedVersions(language, true);
        versions.forEach(version => {
            console.log(`Started copying ${language}/${version}`)
            fs.copySync(path.join(getTranslatedVersionsDir(language, true), version), path.join(getExportedDir(), language, version))
            console.log(`Finished copying ${language}/${version}`)
        })

    })
    console.log("Starting copying exported translations")
    console.timeEnd(`copyExportedTranslations`)
}

async function mergeExported(): Promise<void> {
    console.time(`mergeExported`)
    console.log("Starting merging")
    mergeExportedDocs(getOutDir(), getExportedDir())
    console.log("Finished merging")
    console.timeEnd(`mergeExported`)
}

async function supplementDocsMeta(): Promise<void> {
    console.time(`supplementDocsMeta`)
    console.log("Starting supplementing docs meta")
    getLanguages(getOutDir()).forEach(language => {

        getVersionsInDir(path.join(getOutDir(), language)).forEach(version => {
            console.log(`Started ${language}/${version}`)
            const docsJson = JSON.parse(fs.readFileSync(path.join(getOutDir(), language, version, "docs.json"), "utf-8"));
            const paths = walk(docsJson, []);
            const reversePaths = walkReversed(docsJson.nav, {}, []);
            paths.forEach((obj, i) => {
                let docsMeta: GeneratedDocsMeta = {
                    folders: reversePaths[obj.path],
                    ownerModId: "",
                    searchTerms: [],
                    zenCodeName: "",
                    current: obj,
                    path: obj.path
                };
                const docsMetaJsonPath = obj.path.replace(/\.md/, ".json")
                const fullMetaJsonPath = path.join(getOutDir(), language, version, "content", docsMetaJsonPath);
                if (fs.existsSync(fullMetaJsonPath)) {
                    const docsMetaJson = JSON.parse(fs.readFileSync(fullMetaJsonPath, "utf-8"));
                    docsMeta = merge(docsMeta, docsMetaJson);
                }
                if (i > 0) {
                    docsMeta.previous = {...paths[i - 1]};
                    docsMeta.previous.path = docsMeta.previous.path.replace(/\.md/, "");
                }
                if (i < paths.length - 1) {
                    docsMeta.next = {...paths[i + 1]};
                    docsMeta.next.path = docsMeta.next.path.replace(/\.md/, "");
                }

                fs.writeJSONSync(fullMetaJsonPath, docsMeta);

            });
            console.log(`Finished ${language}/${version}`)
        })
    })
    console.log("Finished supplementing docs meta")
    console.timeEnd(`supplementDocsMeta`)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function generateIndexes(): Promise<void> {
    console.time(`generateIndexes`)
    console.log("Starting generating indexes")
    getLanguages(getOutDir()).forEach(language => {

        getVersionsInDir(path.join(getOutDir(), language)).forEach(version => {
            generateIndex(path.join(getOutDir(), language, version, "content"))
        })
    })
    console.log("Finished generating indexes")
    console.timeEnd(`generateIndexes`)
}

async function finalize(): Promise<void> {
    console.time(`finalize`)
    console.log("Starting finalization")
    const outDir = getOutDir();
    const docsOutDir = getDocsOutDir();
    fs.mkdirsSync(docsOutDir);
    const languages = getLanguages(outDir);
    languages.forEach(language => {
        const versions = getVersionsInDir(path.join(outDir, language));
        versions.forEach(version => {
            console.log(`Finalizing pages ${language}/${version}`)
            const verlangDir = path.join(docsOutDir, version, language);
            fs.mkdirsSync(verlangDir)
            fs.copySync(path.join(outDir, language, version), verlangDir);
            console.log(`Finalized pages ${language}/${version}`)
        })
    })

    const finalDir = path.join(process.cwd(), "site", "docs")
    clearDirectory(finalDir);
    fs.copySync(docsOutDir, finalDir)

    const publicDir = path.join(process.cwd(), "site", "public")
    languages.forEach(language => {
        const versions = getVersionsInDir(path.join(outDir, language));
        versions.forEach(version => {
            console.log(`Finalizing public ${language}/${version}`)
            clearDirectory(path.join(publicDir, version, language));

            const verlangDir = path.join(publicDir, version, language);
            fs.mkdirsSync(verlangDir)
            const files: string[] = [];
            listFiles(path.join(outDir, language, version), files, true)
            console.time("finalize-public")
            console.log(`Copying files ${language}/${version}`)
            for (const file of files) {
                const newFilePath = path.relative(path.join(outDir, language, version), file).replaceAll("content" + path.sep, "");
                const dest = path.join(publicDir, version, language, newFilePath);
                fs.mkdirSync(path.dirname(dest), {recursive: true});
                fs.copyFileSync(file, dest)
            }
            console.log(`Copied files ${language}/${version}`)
            console.timeEnd("finalize-public")
            console.log(`Finalized public ${language}/${version}`)
        })
    })
    console.log("Finished finalization")
    console.timeEnd(`finalize`)
}

console.time("Total")
await clearDirectory("build");
await prepareBuildFolders();
await prepareExportedBuildFolders();
if (getCrowdinToken().length > 0) {
    await download_translations();
    await copyTranslations()
    await copyExportedTranslations()
}
await mergeExported();
await supplementDocsMeta();

// Search is currently disabled
// await generateIndexes();

await finalize();
console.timeEnd("Total")