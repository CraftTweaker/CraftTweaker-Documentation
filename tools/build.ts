import {clearDirectory, getCrowdinToken, getDocsOutDir, getExportedDir, getLanguages, getOutDir, getTranslatedVersions, getTranslatedVersionsDir, getTranslationDir, getVersions, getVersionsInDir, mergeExportedDocs, walk, walkReversed} from "./utils.js";
import fs from 'fs-extra';
import path from "path";
import {GeneratedDocsMeta} from "./types";
import merge from "deepmerge";
import download_translations from "./download_translations.js";
import {generateIndex} from "./search_index.js";

async function prepareBuildFolders(): Promise<void> {
    fs.mkdirSync(getOutDir(), {recursive: true});
    const versions = getVersions();
    versions.forEach(version => {
        fs.copySync(path.join("docs", version), path.join(getOutDir(), "en", version))
    })
}

async function prepareExportedBuildFolders(): Promise<void> {
    fs.mkdirsSync(getExportedDir());
    const versions = getVersions(true);
    versions.forEach(version => {
        fs.copySync(path.join("docs_exported", version), path.join(getExportedDir(), "en", version))
    })
}

async function copyTranslations(): Promise<void> {
    fs.mkdirSync(getOutDir(), {recursive: true});
    const languages = fs.readdirSync(getTranslationDir());
    languages.forEach(language => {
        fs.mkdirsSync(path.join(getOutDir(), language))
        const versions = getTranslatedVersions(language);
        versions.forEach(version => {
            fs.copySync(path.join(getTranslatedVersionsDir(language), version), path.join(getOutDir(), language, version))
        })

    })
}

async function copyExportedTranslations(): Promise<void> {
    fs.mkdirsSync(getExportedDir());
    const languages = fs.readdirSync(getTranslationDir(true));
    languages.forEach(language => {
        fs.mkdirsSync(path.join(getExportedDir(), language))
        const versions = getTranslatedVersions(language, true);
        versions.forEach(version => {
            fs.copySync(path.join(getTranslatedVersionsDir(language, true), version), path.join(getExportedDir(), language, version))
        })

    })
}

async function mergeExported(): Promise<void> {
    mergeExportedDocs(getOutDir(), getExportedDir())
}

async function supplementDocsMeta(): Promise<void> {
    getLanguages(getOutDir()).forEach(language => {

        getVersionsInDir(path.join(getOutDir(), language)).forEach(version => {
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
        })
    })
}

async function finalize(): Promise<void> {
    const outDir = getOutDir();
    const docsOutDir = getDocsOutDir();
    fs.mkdirsSync(docsOutDir);
    const languages = getLanguages(outDir);
    languages.forEach(language => {
        const versions = getVersionsInDir(path.join(outDir, language));
        versions.forEach(version => {
            const verlangDir = path.join(docsOutDir, version, language);
            fs.mkdirsSync(verlangDir)
            fs.copySync(path.join(outDir, language, version), verlangDir);
        })
    })
    const finalDir = path.join(process.cwd(), "site", "docs")
    clearDirectory(finalDir);
    fs.copySync(docsOutDir, finalDir)
}

async function generateIndexes(): Promise<void> {
    getLanguages(getOutDir()).forEach(language => {

        getVersionsInDir(path.join(getOutDir(), language)).forEach(version => {
            generateIndex(path.join(getOutDir(), language, version, "content"))
        })
    })
}

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

await generateIndexes();

await finalize();