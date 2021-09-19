import * as stream from 'stream';
import {promisify} from 'util';
import {createWriteStream} from "fs";
import axios from "axios";
import fs from "fs";
import path from "path";
import extract from "extract-zip";

const finished = promisify(stream.finished);

export async function downloadFile(fileUrl: string, outputLocationPath: string): Promise<any> {
    if (!fs.existsSync(path.dirname(outputLocationPath))) {
        fs.mkdirSync(path.dirname(outputLocationPath));
    }
    const writer = createWriteStream(outputLocationPath);
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream',
    }).then(async response => {
        response.data.pipe(writer);
        return finished(writer); //this is a Promise
    });
}

export async function extractFile(location: string, to: string) {
    console.log(to);
    await extract(location, {dir: to})
}