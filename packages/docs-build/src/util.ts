import fs from "fs-extra";
import path from "node:path";
import merge from "deepmerge";
import type {Docs, DocsReverseLookup, Nav, Page} from "docs-model";

export const BUILD_DIR = path.join("build");
export const DIST_DIR = path.join("dist");
export const TMP_DIR = path.join(BUILD_DIR, "tmp");
export const DOCS_OUT_DIR = path.join(BUILD_DIR, "docs");
export const OUT_DIR = path.join(TMP_DIR, "out");
export const EXPORTED_DIR = path.join(TMP_DIR, "exported");

/**
 * Clears a directory of all files, creating it if it doesn't exist.
 */
export function clearDirectory(dir: string): void {
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true });
    fs.mkdirSync(dir, { recursive: true });
}

/**
 * Gets a list of versions based on files in the given directory.
 */
export function getVersionsInDir(dir: string): string[] {
    return fs.readdirSync(dir).filter(value => fs.statSync(path.join(dir, value)).isDirectory());
}

/**
 * Gets a list of versions based on files in the 'docs' or 'docs_exported' folders
 */
export function getVersions(exported = false): string[] {
    return getVersionsInDir(exported ? "docs_exported" : "docs");
}

export function getDocsOutDir(): string {
    return path.join("build", "docs");
}

export function getExportedDir(): string {
    return path.join("build", "tmp", "exported");
}

export function doJsonMerge(jsonPaths: string[]): Docs {
    let json: Docs = { nav: {} };
    for (const path of jsonPaths.reverse()) {
        const jsonText = fs.readFileSync(path, "utf8");
        json = merge(json, JSON.parse(jsonText));
        console.log(`Merged file '${path}'`);
    }
    return json;
}

export function mergeExportedDocs(
    buildsDir: string,
    exportedDocsDir: string,
): void {
    const versions = getVersionsInDir(exportedDocsDir);

    for (const version of versions) {
        console.log(`Copying version '${version}' to output directory`);
        const versionDir = path.join(exportedDocsDir, version);
        const exportsSubDirs: string[] = fs.readdirSync(versionDir);
        const docJsons: string[] = [];
        for (const subDirectory of exportedDocsDir) {
            const docsDir = path.join(versionDir, subDirectory, "docs");
            const docsJson = path.join(versionDir, subDirectory, "docs.json");

            if (fs.existsSync(docsDir)) {
                const dstDir = path.join(buildsDir, version, "content");
                const dupes = checkForDuplicates(docsDir, dstDir, true);
                if (dupes.length > 0) {
                    console.log(docsDir);
                    console.log(dstDir);
                    console.error(
                        `Duplicate files were identified for version '${version}': docs merging will ignore these files!`,
                    );
                    console.error(`Found files: ${dupes}`);
                }

                fs.copySync(docsDir, path.join(buildsDir, version, "content"), {
                    overwrite: false,
                    errorOnExist: false,
                });

                if (fs.existsSync(docsJson)) {
                    docJsons.push(docsJson);
                } else {
                    console.error(
                        `Directory '${docsDir}' does not define any 'docs.json' files: check your automated export script!`,
                    );
                }
            } else {
                console.log(
                    `Subdirectory '${subDirectory}' does not host docs for version '${version}': skipping`,
                );
            }
        }

        const mainJson = path.join(buildsDir, version, "docs.json");
        if (fs.existsSync(mainJson)) {
            docJsons.push(mainJson);
        } else {
            console.error(
                `Version '${version}' does not define a main 'docs.json' in directory '${mainJson}': this is a serious error!`,
            );
        }

        console.log(`Merging 'docs.json' files for version '${version}'`);
        const mergedJson: Docs = doJsonMerge(docJsons);
        fs.writeFileSync(
            path.join(buildsDir, version, "docs.json"),
            JSON.stringify(mergedJson),
        );
    }
}

export function checkForDuplicates(
    src: string,
    dst: string,
    recursive: boolean,
): string[] {
    let srcFiles: string[] = [];
    let dstFiles: string[] = [];
    listFiles(src, srcFiles, recursive);
    listFiles(dst, dstFiles, recursive);
    srcFiles = srcFiles.map((value) => value.substring(src.length));
    dstFiles = dstFiles.map((value) => value.substring(dst.length));

    const dupes: string[] = [];
    for (const file of srcFiles) {
        if (dstFiles.includes(file)) {
            dupes.push(file);
        }
    }

    return dupes;
}

export function listFiles(
    dir: string,
    fileList: string[],
    recursive: boolean,
    extensionFilters: string[] = [],
): string[] {
    const shouldFilter = extensionFilters.length > 0;
    const files = fs.readdirSync(dir);
    let newFileList = fileList || [];

    for (const file of files) {
        if (recursive && fs.statSync(path.join(dir, file)).isDirectory()) {
            newFileList = listFiles(
                path.join(dir, file),
                newFileList,
                recursive,
                extensionFilters,
            );
        } else {
            const shouldAdd =
                !shouldFilter ||
                extensionFilters.some((filter) => file.endsWith(`.${filter}`));
            if (shouldAdd) {
                newFileList.push(path.join(dir, file));
            }
        }
    }
    return newFileList;
}

export function walk(doc: Nav | Nav[], done: Page[]): Page[] {
    let donePages = done || [];

    for (const docKey in doc) {
        if (!(docKey in doc)) {
            continue;
        }
        // @ts-ignore
        const val = doc[docKey];
        if (typeof val === "object") {
            donePages = walk(val as Nav[], donePages);
        } else {
            donePages.push({ name: docKey, path: val });
        }
    }
    return donePages;
}

export function walkReversed(
    doc: Nav | Nav[],
    done: DocsReverseLookup,
    parents: string[],
): DocsReverseLookup {
    let donePages = done || {};

    for (const docKey in doc) {
        if (!(docKey in doc)) {
            continue;
        }
        // @ts-ignore
        const val = doc[docKey];

        if (typeof val === "object") {
            donePages = walkReversed(val, donePages, [...parents, docKey]);
        } else {
            donePages[val] = parents;
        }
    }
    return donePages;
}
