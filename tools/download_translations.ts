import Client, {HttpClientType, ResponseObject, TranslationsModel} from '@crowdin/crowdin-api-client';
import {downloadFile, extractFile} from "./utils.js";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();

const projectId = 314723;
const getClient: () => Client = () => {

    // @ts-ignore
    return new Client.default({token: process.env.CROWDIN_TOKEN}, {httpClientType: HttpClientType.AXIOS});
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function getBuilds(client: Client): Promise<ResponseObject<TranslationsModel.Build>[]> {
    return (await client.translationsApi.listProjectBuilds(projectId)).data;
}

async function getFinishedBuild(client: Client): Promise<ResponseObject<TranslationsModel.Build>> {
    return (await client.translationsApi.listProjectBuilds(projectId)).data.filter(value => value.data.status === "finished")[0];
}

async function isBuildInProgress(client: Client): Promise<{ isBuilding: boolean, progress: number }> {
    const builds = await getBuilds(client);
    const foundBuild = builds.filter(value => value.data.status === "inProgress");
    if (foundBuild.length === 0) {
        return Promise.resolve({isBuilding: false, progress: 100});
    } else {
        return Promise.resolve({isBuilding: true, progress: foundBuild[0].data.progress});
    }
}

async function isFinished(build: TranslationsModel.Build): Promise<boolean> {
    return build.status === "finished";
}


async function build(client: Client): Promise<ResponseObject<TranslationsModel.Build>> {
    return (await client.translationsApi.buildProject(projectId));
}

async function downloadBuild(client: Client, id: number) {
    const downloadData = (await client.translationsApi.downloadTranslations(projectId, id)).data;
    await downloadFile(downloadData.url, path.join("build", "translations.zip"))
}

const client = getClient()

let buildStatus = await isBuildInProgress(client)
console.log(buildStatus);
if (!buildStatus.isBuilding) {
    console.log("Attempting Crowdin build");
    try{
     await build(client);
    }catch (e){

    }
    buildStatus = await isBuildInProgress(client);
    console.log(buildStatus);
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

await downloadBuild(client, finishedBuild.data.id)
await extractFile(path.join(process.cwd(), "build", "translations.zip"), path.join(process.cwd(), "build", "translations"))
// console.log((await client.translationsApi.buildProject(projectId)).data)
// console.log((await client.translationsApi.checkBuildStatus(projectId, 5)).data)
// console.dir((await client.translationsApi.listProjectBuilds(projectId)).data, {depth: 20});

/*
    Process:
    Look if a build is in progress
    If it is


 */