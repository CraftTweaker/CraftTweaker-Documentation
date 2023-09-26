# IBuildingWorker

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.IBuildingWorker;
```


## Implemented Interfaces
IBuildingWorker implements the following interfaces. That means all methods defined in these interfaces are also available in IBuildingWorker

- [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

## Methods

:::group{name=assignCitizen}

Return Type: boolean

```zenscript
IBuildingWorker.assignCitizen(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=canEat}

Return Type: boolean

```zenscript
IBuildingWorker.canEat(var1 as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=canWorkDuringTheRain}

Return Type: boolean

```zenscript
// IBuildingWorker.canWorkDuringTheRain() as boolean

myIBuildingWorker.canWorkDuringTheRain();
```

:::

:::group{name=createJob}

Return Type: [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob)

```zenscript
IBuildingWorker.createJob(var1 as ICitizenData) as IJob
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=getHandlers}

Return Type: stdlib.List&lt;[IItemHandler](/forge/api/capability/IItemHandler)&gt;

```zenscript
// IBuildingWorker.getHandlers() as stdlib.List<IItemHandler>

myIBuildingWorker.getHandlers();
```

:::

:::group{name=getHiringMode}

Return Type: [HiringMode](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/HiringMode)

```zenscript
// IBuildingWorker.getHiringMode() as HiringMode

myIBuildingWorker.getHiringMode();
```

:::

:::group{name=getJobName}

Return Type: string

```zenscript
// IBuildingWorker.getJobName() as string

myIBuildingWorker.getJobName();
```

:::

:::group{name=getMaxToolLevel}

Return Type: int

```zenscript
// IBuildingWorker.getMaxToolLevel() as int

myIBuildingWorker.getMaxToolLevel();
```

:::

:::group{name=getPrimarySkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorker.getPrimarySkill() as Skill

myIBuildingWorker.getPrimarySkill();
```

:::

:::group{name=getRecipeImprovementSkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorker.getRecipeImprovementSkill() as Skill

myIBuildingWorker.getRecipeImprovementSkill();
```

:::

:::group{name=getSecondarySkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorker.getSecondarySkill() as Skill

myIBuildingWorker.getSecondarySkill();
```

:::

:::group{name=isItemStackInRequest}

Return Type: boolean

```zenscript
IBuildingWorker.isItemStackInRequest(var1 as ItemStack?) as boolean
```

| Parameter |                   Type                    |
|-----------|-------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack)? |


:::

:::group{name=setHiringMode}

```zenscript
IBuildingWorker.setHiringMode(var1 as HiringMode)
```

| Parameter |                                          Type                                           |
|-----------|-----------------------------------------------------------------------------------------|
| var1      | [HiringMode](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/HiringMode) |


:::


