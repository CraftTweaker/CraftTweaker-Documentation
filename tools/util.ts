let fs = require('fs');
let path = require('path');

export const listFiles = (dir: string, filelist: string[]) => {
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file: string) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = listFiles(path.join(dir, file) + '/', filelist);
        } else {
            if (file.endsWith(".md"))
                filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};

export const getLanguages = (buildDir: string): string[] => {
    return fs.readdirSync(buildDir);
};