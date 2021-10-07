import * as stream from 'stream';
import {promisify} from 'util';
import {createWriteStream} from "fs";
import axios from "axios";
import fs from "fs-extra";
import path from "path";
import extract from "extract-zip";
import dotenv from "dotenv";
import Client, {HttpClientType, ResponseObject, TranslationsModel} from "@crowdin/crowdin-api-client";
import merge from "deepmerge";
import {Docs, Nav, Page, ReversePaths} from "./types";

dotenv.config();

const finished = promisify(stream.finished);

export function clearDirectory(dir: string): void {
    if (fs.existsSync(dir))
        fs.rmdirSync(dir, {recursive: true});
    fs.mkdirSync(dir, {recursive: true});
}

export async function downloadFile(fileUrl: string, outputLocationPath: string): Promise<unknown> {
    fs.mkdirSync(path.dirname(outputLocationPath), {recursive: true});
    const writer = createWriteStream(outputLocationPath);
    return axios.get<stream>(fileUrl, {
        responseType: 'stream',
    }).then(async response => {
        response.data.pipe(writer);
        return finished(writer); //this is a Promise
    });
}

export async function extractFile(location: string, to: string): Promise<void> {
    await extract(location, {dir: to})
}

export function getProjectId(): number {
    return parseInt(process.env.CROWDIN_PROJECT_ID || "-1");
}

export function getCrowdinToken(): string {
    return process.env.CROWDIN_TOKEN || "";
}


export const getClient: () => Client = () => {

    // @ts-ignore
    return new Client.default({token: getCrowdinToken()}, {httpClientType: HttpClientType.AXIOS});
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getBuilds(client: Client): Promise<ResponseObject<TranslationsModel.Build>[]> {
    return (await client.translationsApi.listProjectBuilds(getProjectId())).data;
}

export async function getFinishedBuild(client: Client): Promise<ResponseObject<TranslationsModel.Build>> {
    return (await client.translationsApi.listProjectBuilds(getProjectId())).data.filter(value => value.data.status === "finished")[0];
}

export async function isBuildInProgress(client: Client): Promise<{ isBuilding: boolean, progress: number }> {
    const builds = await getBuilds(client);
    const foundBuild = builds.filter(value => value.data.status === "inProgress");
    if (foundBuild.length === 0) {
        return Promise.resolve({isBuilding: false, progress: 100});
    } else {
        return Promise.resolve({isBuilding: true, progress: foundBuild[0].data.progress});
    }
}

export async function build(client: Client): Promise<ResponseObject<TranslationsModel.Build>> {
    return (await client.translationsApi.buildProject(getProjectId()));
}

export async function downloadBuild(client: Client, id: number): Promise<void> {
    const downloadData = (await client.translationsApi.downloadTranslations(getProjectId(), id)).data;
    await downloadFile(downloadData.url, path.join("build", "tmp", "translations.zip"))
}

export function getTranslationDir(exported = false): string {
    return path.join("build", "tmp", "translations", "main", `translations${exported ? "_exported" : ""}`);
}

export function getTranslatedVersionsDir(language: string, exported = false): string {
    return path.join(getTranslationDir(exported), language, "main", `docs${exported ? "_exported" : ""}`);
}

export function getTranslatedVersions(language: string, exported = false): string[] {
    return fs.readdirSync(getTranslatedVersionsDir(language, exported));
}

export function getVersions(exported = false): string[] {
    return fs.readdirSync(`docs${exported ? "_exported" : ""}`);
}

export function getVersionsInDir(dir: string): string[] {
    return fs.readdirSync(dir);
}

export function getOutDir(): string {
    return path.join("build", "tmp", "out");
}

export function getDocsOutDir(): string {
    return path.join("build", "docs");
}

export function getExportedDir(): string {
    return path.join("build", "tmp", "exported");
}

export function doJsonMerge(jsonPaths: string[]): Docs {
    let json: Docs = {nav: {}};
    jsonPaths.reverse().forEach((path: string) => {
        const jsonText = fs.readFileSync(path, 'utf8');
        json = merge(json, JSON.parse(jsonText));
        console.log(`Merged file '${path}'`);
    });
    return json;
}

export function mergeExportedDocs(buildsDir: string, exportedDocsDir: string): void {

    getLanguages(buildsDir).forEach(lang => {

        const exportedVersionDir = path.join(exportedDocsDir, lang);

        const translatedVersions = getVersionsInDir(exportedVersionDir);

        translatedVersions.forEach(version => {

            console.log(`Copying translated files for language '${lang}' and version '${version}' to output directory`);
            const versionDir = path.join(exportedVersionDir, version);
            const exportsSubDirs: string[] = fs.readdirSync(versionDir);
            const languageJsons: string[] = [];
            exportsSubDirs.forEach(subDirectory => {
                const docsDir = path.join(versionDir, subDirectory, "docs");
                const docsJson = path.join(versionDir, subDirectory, "docs.json");

                if (fs.existsSync(docsDir)) {
                    const dstDir = path.join(buildsDir, lang, version, "content");
                    const dupes = checkForDuplicates(docsDir, dstDir, true);
                    if (dupes.length > 0) {
                        console.error(`Duplicate files were identified for language '${lang}' and version '${version}': docs merging will ignore these files!`);
                        console.error(`Found files: ${dupes}`);
                    }

                    fs.copySync(docsDir, path.join(buildsDir, lang, version, "content"), {
                        overwrite: false,
                        errorOnExist: false
                    });

                    if (fs.existsSync(docsJson)) {
                        languageJsons.push(docsJson);
                    } else {
                        console.error(`Directory '${docsDir}' does not define any 'docs.json' files: check your automated export script!`);
                    }
                } else {
                    console.log(`Subdirectory '${subDirectory}' does not host docs for language '${lang}' and version '${version}': skipping`);
                }
            })

            const mainJson = path.join(buildsDir, lang, version, `docs.json`);
            if (fs.existsSync(mainJson)) {
                languageJsons.push(mainJson);
            } else {
                console.error(`Language '${lang}' and version '${version}' does not define a main 'docs.json' in directory '${mainJson}': this is a serious error!`);
            }

            console.log(`Merging 'docs.json' files for language '${lang}' and version '${version}': found ${languageJsons.length} files`);
            const mergedJson: Docs = doJsonMerge(languageJsons);
            fs.writeFileSync(path.join(buildsDir, lang, version, "docs.json"), JSON.stringify(mergedJson));
        });
    })
}

export function getLanguages(buildDir: string): string[] {
    return fs.readdirSync(buildDir);
}

export function checkForDuplicates(src: string, dst: string, recursive: boolean): string[] {
    let srcFiles: string[] = [];
    let dstFiles: string[] = [];
    listFiles(src, srcFiles, recursive);
    listFiles(dst, dstFiles, recursive);
    srcFiles = srcFiles.map(value => value.substr(src.length));
    dstFiles = dstFiles.map(value => value.substr(dst.length));

    const dupes: string[] = [];
    for (const file of srcFiles) {
        if (dstFiles.includes(file)) {
            dupes.push(file);
        }
    }


    return dupes;
}


export function listFiles(dir: string, fileList: string[], recursive: boolean, extensionFilters: string[] = []): string[] {
    const shouldFilter = extensionFilters.length > 0;
    const files = fs.readdirSync(dir);
    fileList = fileList || [];
    files.forEach(function (file: string) {
        if (recursive && fs.statSync(path.join(dir, file)).isDirectory()) {
            fileList = listFiles(path.join(dir, file) + '/', fileList, recursive, extensionFilters);
        } else {
            if (!shouldFilter) {
                fileList.push(path.join(dir, file));
            } else {
                for (const filter of extensionFilters) {
                    if (file.endsWith("." + filter)) fileList.push(path.join(dir, file))
                }
            }
        }
    });
    return fileList;
}

export function walk(doc: Nav | Nav[], done: Page[]): Page[] {

    done = done || [];

    for (const docKey in doc) {
        if (!(docKey in doc)) {
            continue;
        }
        // @ts-ignore
        const val = doc[docKey];
        if (typeof val === "object") {
            done = walk(val as Nav[], done);
        } else {
            done.push({name: docKey, path: val});
        }
    }
    return done;
}

export function walkReversed(doc: Nav | Nav[], done: ReversePaths, parents: string[]): ReversePaths {

    done = done || {};

    for (const docKey in doc) {
        if (!(docKey in doc)) {
            continue;
        }
        // @ts-ignore
        const val = doc[docKey];

        if (typeof val === "object") {
            done = walkReversed(val, done, [...parents, docKey]);
        } else {

            done[val] = parents
        }
    }
    return done;
}