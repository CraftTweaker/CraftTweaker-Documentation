# IWorkOrder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.workorders.IWorkOrder;
```


## Methods

:::group{name=canBeMadeBy}

Return Type: boolean

```zenscript
IWorkOrder.canBeMadeBy(var1 as IJob) as boolean
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| var1      | [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob) |


:::

:::group{name=canBeResolved}

Return Type: boolean

```zenscript
IWorkOrder.canBeResolved(var1 as IColony, var2 as int) as boolean
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |
| var2      | int                                                                     |


:::

:::group{name=canBuild}

Return Type: boolean

```zenscript
IWorkOrder.canBuild(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=clearClaimedBy}

```zenscript
// IWorkOrder.clearClaimedBy()

myIWorkOrder.clearClaimedBy();
```

:::

:::group{name=getAmountOfResources}

Return Type: int

```zenscript
// IWorkOrder.getAmountOfResources() as int

myIWorkOrder.getAmountOfResources();
```

:::

:::group{name=getClaimedBy}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IWorkOrder.getClaimedBy() as BlockPos

myIWorkOrder.getClaimedBy();
```

:::

:::group{name=getCurrentLevel}

Return Type: int

```zenscript
// IWorkOrder.getCurrentLevel() as int

myIWorkOrder.getCurrentLevel();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// IWorkOrder.getDisplayName() as Component

myIWorkOrder.getDisplayName();
```

:::

:::group{name=getFileName}

Return Type: string

```zenscript
// IWorkOrder.getFileName() as string

myIWorkOrder.getFileName();
```

:::

:::group{name=getID}

Return Type: int

```zenscript
// IWorkOrder.getID() as int

myIWorkOrder.getID();
```

:::

:::group{name=getIteratorType}

Return Type: string

```zenscript
// IWorkOrder.getIteratorType() as string

myIWorkOrder.getIteratorType();
```

:::

:::group{name=getLocation}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IWorkOrder.getLocation() as BlockPos

myIWorkOrder.getLocation();
```

:::

:::group{name=getPriority}

Return Type: int

```zenscript
// IWorkOrder.getPriority() as int

myIWorkOrder.getPriority();
```

:::

:::group{name=getRotation}

Return Type: int

```zenscript
// IWorkOrder.getRotation() as int

myIWorkOrder.getRotation();
```

:::

:::group{name=getStructurePack}

Return Type: string

```zenscript
// IWorkOrder.getStructurePack() as string

myIWorkOrder.getStructurePack();
```

:::

:::group{name=getStructurePath}

Return Type: string

```zenscript
// IWorkOrder.getStructurePath() as string

myIWorkOrder.getStructurePath();
```

:::

:::group{name=getTargetLevel}

Return Type: int

```zenscript
// IWorkOrder.getTargetLevel() as int

myIWorkOrder.getTargetLevel();
```

:::

:::group{name=getTranslationKey}

Return Type: string

```zenscript
// IWorkOrder.getTranslationKey() as string

myIWorkOrder.getTranslationKey();
```

:::

:::group{name=getWorkOrderType}

Return Type: **invalid**

```zenscript
// IWorkOrder.getWorkOrderType() as invalid

myIWorkOrder.getWorkOrderType();
```

:::

:::group{name=isClaimed}

Return Type: boolean

```zenscript
// IWorkOrder.isClaimed() as boolean

myIWorkOrder.isClaimed();
```

:::

:::group{name=isClaimedBy}

Return Type: boolean

```zenscript
IWorkOrder.isClaimedBy(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=isCleared}

Return Type: boolean

```zenscript
// IWorkOrder.isCleared() as boolean

myIWorkOrder.isCleared();
```

:::

:::group{name=isDirty}

Return Type: boolean

```zenscript
// IWorkOrder.isDirty() as boolean

myIWorkOrder.isDirty();
```

:::

:::group{name=isMirrored}

Return Type: boolean

```zenscript
// IWorkOrder.isMirrored() as boolean

myIWorkOrder.isMirrored();
```

:::

:::group{name=isRequested}

Return Type: boolean

```zenscript
// IWorkOrder.isRequested() as boolean

myIWorkOrder.isRequested();
```

:::

:::group{name=isValid}

Return Type: boolean

```zenscript
IWorkOrder.isValid(var1 as IColony) as boolean
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=onAdded}

```zenscript
IWorkOrder.onAdded(var1 as IColony, var2 as boolean)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |
| var2      | boolean                                                                 |


:::

:::group{name=onCompleted}

```zenscript
IWorkOrder.onCompleted(var1 as IColony, var2 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)           |
| var2      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=onRemoved}

```zenscript
IWorkOrder.onRemoved(var1 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=read}

```zenscript
IWorkOrder.read(var1 as CompoundTag, var2 as IWorkManager)
```

| Parameter |                                             Type                                             |
|-----------|----------------------------------------------------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)                                              |
| var2      | [IWorkManager](/mods/sdmcrtplus/integration/minecolonies/api/colony/workorders/IWorkManager) |


:::

:::group{name=resetChange}

```zenscript
// IWorkOrder.resetChange()

myIWorkOrder.resetChange();
```

:::

:::group{name=setAmountOfResources}

```zenscript
IWorkOrder.setAmountOfResources(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setClaimedBy}

```zenscript
IWorkOrder.setClaimedBy(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setClaimedBy}

```zenscript
IWorkOrder.setClaimedBy(var1 as ICitizenData?)
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)? |


:::

:::group{name=setCleared}

```zenscript
IWorkOrder.setCleared(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setID}

```zenscript
IWorkOrder.setID(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setIteratorType}

```zenscript
IWorkOrder.setIteratorType(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=setPriority}

```zenscript
IWorkOrder.setPriority(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setRequested}

```zenscript
IWorkOrder.setRequested(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=tooFarFromAnyBuilder}

Return Type: boolean

```zenscript
IWorkOrder.tooFarFromAnyBuilder(var1 as IColony, var2 as int) as boolean
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |
| var2      | int                                                                     |


:::

:::group{name=write}

```zenscript
IWorkOrder.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


