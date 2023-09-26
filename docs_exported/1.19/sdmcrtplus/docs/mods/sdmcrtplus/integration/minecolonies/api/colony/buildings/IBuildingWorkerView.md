# IBuildingWorkerView

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.IBuildingWorkerView;
```


## Implemented Interfaces
IBuildingWorkerView implements the following interfaces. That means all methods defined in these interfaces are also available in IBuildingWorkerView

- [IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)

## Methods

:::group{name=addWorkerId}

```zenscript
IBuildingWorkerView.addWorkerId(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getJobDisplayName}

Return Type: string

```zenscript
// IBuildingWorkerView.getJobDisplayName() as string

myIBuildingWorkerView.getJobDisplayName();
```

:::

:::group{name=getJobName}

Return Type: string

```zenscript
// IBuildingWorkerView.getJobName() as string

myIBuildingWorkerView.getJobName();
```

:::

:::group{name=getPrimarySkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorkerView.getPrimarySkill() as Skill

myIBuildingWorkerView.getPrimarySkill();
```

:::

:::group{name=getSecondarySkill}

Return Type: [Skill](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/Skill)

```zenscript
// IBuildingWorkerView.getSecondarySkill() as Skill

myIBuildingWorkerView.getSecondarySkill();
```

:::

:::group{name=getWorkerId}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// IBuildingWorkerView.getWorkerId() as stdlib.List<int?>

myIBuildingWorkerView.getWorkerId();
```

:::

:::group{name=hasEnoughWorkers}

Return Type: boolean

```zenscript
// IBuildingWorkerView.hasEnoughWorkers() as boolean

myIBuildingWorkerView.hasEnoughWorkers();
```

:::

:::group{name=removeWorkerId}

```zenscript
IBuildingWorkerView.removeWorkerId(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setHiringMode}

```zenscript
IBuildingWorkerView.setHiringMode(var1 as HiringMode)
```

| Parameter |                                          Type                                           |
|-----------|-----------------------------------------------------------------------------------------|
| var1      | [HiringMode](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/HiringMode) |


:::


