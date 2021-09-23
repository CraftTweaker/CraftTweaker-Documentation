import {build, downloadBuild, extractFile, getClient, getFinishedBuild, isBuildInProgress, sleep} from "./utils.js";
import path from "path";

export default async function (): Promise<void> {
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

    await downloadBuild(client, finishedBuild.data.id)
    await extractFile(path.join(process.cwd(), "build", "tmp", "translations.zip"), path.join(process.cwd(), "build", "tmp", "translations"))
}