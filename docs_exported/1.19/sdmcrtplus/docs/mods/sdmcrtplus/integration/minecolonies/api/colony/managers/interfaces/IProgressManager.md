# IProgressManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IProgressManager;
```


## Methods

:::group{name=isPrintingProgress}

Return Type: boolean

```zenscript
// IProgressManager.isPrintingProgress() as boolean

myIProgressManager.isPrintingProgress();
```

:::

:::group{name=progressBuildBuilding}

```zenscript
IProgressManager.progressBuildBuilding(var1 as IBuilding, var2 as int, var3 as int)
```

| Parameter |                                         Type                                          |
|-----------|---------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding) |
| var2      | int                                                                                   |
| var3      | int                                                                                   |


:::

:::group{name=progressBuildingPlacement}

```zenscript
IProgressManager.progressBuildingPlacement(var1 as Block)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=progressCitizenSpawn}

```zenscript
IProgressManager.progressCitizenSpawn(var1 as int, var2 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |
| var2      | int  |


:::

:::group{name=progressEmploy}

```zenscript
IProgressManager.progressEmploy(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=progressEmploymentModeChange}

```zenscript
// IProgressManager.progressEmploymentModeChange()

myIProgressManager.progressEmploymentModeChange();
```

:::

:::group{name=progressWorkOrderPlacement}

```zenscript
IProgressManager.progressWorkOrderPlacement(var1 as IWorkOrder)
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| var1      | [IWorkOrder](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkOrder) |


:::

:::group{name=read}

```zenscript
IProgressManager.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=togglePrintProgress}

```zenscript
// IProgressManager.togglePrintProgress()

myIProgressManager.togglePrintProgress();
```

:::

:::group{name=trigger}

```zenscript
IProgressManager.trigger(var1 as ColonyProgressType)
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | [ColonyProgressType](/mods/sdmcrtplus/integration/minecolonies/api/colony/ColonyProgressType) |


:::

:::group{name=write}

```zenscript
IProgressManager.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


