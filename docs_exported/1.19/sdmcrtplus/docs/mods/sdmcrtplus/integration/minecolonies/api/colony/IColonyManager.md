# IColonyManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.IColonyManager;
```


## Methods

:::group{name=createColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.createColony(var1 as Level, var2 as BlockPos, var3 as Player, var4 as string, var5 as string) as IColony?
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)                |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)      |
| var3      | [Player](/vanilla/api/entity/type/player/Player) |
| var4      | string                                           |
| var5      | string                                           |


:::

:::group{name=deleteColonyByDimension}

```zenscript
IColonyManager.deleteColonyByDimension(var1 as int, var2 as boolean, var3 as ResourceKey<Level>)
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | int                                                                                           |
| var2      | boolean                                                                                       |
| var3      | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |


:::

:::group{name=deleteColonyByWorld}

```zenscript
IColonyManager.deleteColonyByWorld(var1 as int, var2 as boolean, var3 as Level)
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | int                               |
| var2      | boolean                           |
| var3      | [Level](/vanilla/api/world/Level) |


:::

:::group{name=getAllColonies}

Return Type: stdlib.List&lt;[IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)&gt;

```zenscript
// IColonyManager.getAllColonies() as stdlib.List<IColony>

myIColonyManager.getAllColonies();
```

:::

:::group{name=getBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

```zenscript
IColonyManager.getBuilding(var1 as Level, var2 as BlockPos) as IBuilding
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBuildingView}

Return Type: [IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)

```zenscript
IColonyManager.getBuildingView(var1 as ResourceKey<Level>, var2 as BlockPos) as IBuildingView
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                                                   |


:::

:::group{name=getClosestColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
IColonyManager.getClosestColony(var1 as Level, var2 as BlockPos) as IColony
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getClosestColonyView}

Return Type: [IColonyView](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColonyView)?

```zenscript
IColonyManager.getClosestColonyView(var1 as Level, var2 as BlockPos) as IColonyView?
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getClosestIColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.getClosestIColony(var1 as Level, var2 as BlockPos) as IColony?
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getColonies}

Return Type: stdlib.List&lt;[IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)&gt;

```zenscript
IColonyManager.getColonies(var1 as Level) as stdlib.List<IColony>
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Level](/vanilla/api/world/Level) |


:::

:::group{name=getColoniesAbandonedSince}

Return Type: stdlib.List&lt;[IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)&gt;

```zenscript
IColonyManager.getColoniesAbandonedSince(var1 as int) as stdlib.List<IColony>
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getColonyByDimension}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.getColonyByDimension(var1 as int, var2 as ResourceKey<Level>) as IColony?
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | int                                                                                           |
| var2      | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |


:::

:::group{name=getColonyByPosFromDim}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
IColonyManager.getColonyByPosFromDim(var1 as ResourceKey<Level>, var2 as BlockPos) as IColony
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                                                   |


:::

:::group{name=getColonyByPosFromWorld}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.getColonyByPosFromWorld(var1 as Level, var2 as BlockPos) as IColony?
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getColonyByWorld}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.getColonyByWorld(var1 as int, var2 as Level) as IColony?
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | int                               |
| var2      | [Level](/vanilla/api/world/Level) |


:::

:::group{name=getColonyView}

Return Type: [IColonyView](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColonyView)

```zenscript
IColonyManager.getColonyView(var1 as int, var2 as ResourceKey<Level>) as IColonyView
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | int                                                                                           |
| var2      | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |


:::

:::group{name=getCompatibilityManager}

Return Type: **invalid**

```zenscript
// IColonyManager.getCompatibilityManager() as invalid

myIColonyManager.getCompatibilityManager();
```

:::

:::group{name=getIColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
IColonyManager.getIColony(var1 as Level, var2 as BlockPos) as IColony
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getIColonyByOwner}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.getIColonyByOwner(var1 as Level, var2 as Player) as IColony?
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)                |
| var2      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=getIColonyByOwner}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?

```zenscript
IColonyManager.getIColonyByOwner(var1 as Level, var2 as string) as IColony?
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Level](/vanilla/api/world/Level) |
| var2      | string                            |


:::

:::group{name=getMinimumDistanceBetweenTownHalls}

Return Type: int

```zenscript
// IColonyManager.getMinimumDistanceBetweenTownHalls() as int

myIColonyManager.getMinimumDistanceBetweenTownHalls();
```

:::

:::group{name=getRecipeManager}

Return Type: **invalid**

```zenscript
// IColonyManager.getRecipeManager() as invalid

myIColonyManager.getRecipeManager();
```

:::

:::group{name=getServerUUID}

Return Type: string

```zenscript
// IColonyManager.getServerUUID() as string

myIColonyManager.getServerUUID();
```

:::

:::group{name=getTopColonyId}

Return Type: int

```zenscript
// IColonyManager.getTopColonyId() as int

myIColonyManager.getTopColonyId();
```

:::

:::group{name=isCoordinateInAnyColony}

Return Type: boolean

```zenscript
IColonyManager.isCoordinateInAnyColony(var1 as Level, var2 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=isFarEnoughFromColonies}

Return Type: boolean

```zenscript
IColonyManager.isFarEnoughFromColonies(var1 as Level, var2 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [Level](/vanilla/api/world/Level)           |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=isSchematicDownloaded}

Return Type: boolean

```zenscript
// IColonyManager.isSchematicDownloaded() as boolean

myIColonyManager.isSchematicDownloaded();
```

:::

:::group{name=openReactivationWindow}

```zenscript
IColonyManager.openReactivationWindow(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=read}

```zenscript
IColonyManager.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=removeColonyView}

```zenscript
IColonyManager.removeColonyView(var1 as int, var2 as ResourceKey<Level>)
```

| Parameter |                                             Type                                              |
|-----------|-----------------------------------------------------------------------------------------------|
| var1      | int                                                                                           |
| var2      | [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |


:::

:::group{name=resetColonyViews}

```zenscript
// IColonyManager.resetColonyViews()

myIColonyManager.resetColonyViews();
```

:::

:::group{name=setSchematicDownloaded}

```zenscript
IColonyManager.setSchematicDownloaded(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=write}

```zenscript
IColonyManager.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


