let fs = require('fs');
let path = require('path');

export const listFiles = (dir: string, filelist: string[], extensionFilters: string[]) => {
    let shouldFilter = extensionFilters.length > 0;
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file: string) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = listFiles(path.join(dir, file) + '/', filelist, extensionFilters);
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
            done[val] = parents
        }
    }
    return done;
};

export interface NavObject {
    key: string
    value: string[]
}