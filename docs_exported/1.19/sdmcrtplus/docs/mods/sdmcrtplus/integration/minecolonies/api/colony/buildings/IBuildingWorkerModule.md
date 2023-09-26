# IBuildingWorkerModule

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.IBuildingWorkerModule;
```


## Methods

:::group{name=canWorkDuringTheRain}

Return Type: boolean

```zenscript
// IBuildingWorkerModule.canWorkDuringTheRain() as boolean

myIBuildingWorkerModule.canWorkDuringTheRain();
```

:::

:::group{name=createJob}

Return Type: [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob)

```zenscript
IBuildingWorkerModule.createJob(var1 as ICitizenData) as IJob
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getJobEntry}

Return Type: [JobEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/JobEntry)

```zenscript
// IBuildingWorkerModule.getJobEntry() as JobEntry

myIBuildingWorkerModule.getJobEntry();
```

:::

:::group{name=getPrimarySkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorkerModule.getPrimarySkill() as Skill

myIBuildingWorkerModule.getPrimarySkill();
```

:::

:::group{name=getSecondarySkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorkerModule.getSecondarySkill() as Skill

myIBuildingWorkerModule.getSecondarySkill();
```

:::


