let fs = require('fs');
let path = require('path');

export const listFiles = (dir: string, filelist: string[], recursive: boolean, extensionFilters: string[]) => {
    let shouldFilter = extensionFilters.length > 0;
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file: string) {
        if (recursive && fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = listFiles(path.join(dir, file) + '/', filelist, recursive, extensionFilters);
        } else {
            if (!shouldFilter) {
                filelist.push(path.join(dir, file));
            } else {
                for (let filter of extensionFilters) {
                    if (file.endsWith("." + filter)) filelist.push(path.join(dir, file))
                }
            }
        }
    });
    return filelist;
};

export const checkForDuplicates = (src: string, dst: string, recursive: boolean): string[] => {
    const cleanse = (a: string[], prefix: string): void => {
        for (let i = 0; i < a.length; ++i) {
            a[i] = a[i].substr(prefix.length);
        }
    };

    let srcFiles: string[] = [];
    let dstFiles: string[] = [];
    listFiles(src, srcFiles, recursive, []);
    listFiles(dst, dstFiles, recursive, []);
    cleanse(srcFiles, src);
    cleanse(dstFiles, dst);

    let dupes: string[] = [];
    for (let file of srcFiles) if (dstFiles.includes(file)) dupes.push(file);

    return dupes;
};

export const getLanguages = (buildDir: string): string[] => {
    return fs.readdirSync(buildDir);
};


export const walk = function (doc: object[], done: any, parents: string[]) {

    done = done || {};

    for (let docKey in doc) {
        if (!doc.hasOwnProperty(docKey)) {
            // whatever webstorm
            continue;
        }
        let val: any = doc[docKey];
        if (typeof val === "object") {
            done = walk(val, done, [...parents, docKey]);
        } else {
            done[path.join(...val.split("/"))] = parents
        }
    }
    return done;
};

export interface NavObject {
    key: string
    value: string[]
}