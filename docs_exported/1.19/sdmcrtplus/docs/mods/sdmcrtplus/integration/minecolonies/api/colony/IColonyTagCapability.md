# IColonyTagCapability

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.IColonyTagCapability;
```


## Methods

:::group{name=addBuildingClaim}

```zenscript
IColonyTagCapability.addBuildingClaim(var1 as int, var2 as BlockPos, var3 as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | int                                                         |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                 |
| var3      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=addColony}

```zenscript
IColonyTagCapability.addColony(var1 as int, var2 as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | int                                                         |
| var2      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=getAllClaimingBuildings}

Return Type: Set&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;[int?]

```zenscript
// IColonyTagCapability.getAllClaimingBuildings() as Set<BlockPos>[int?]

myIColonyTagCapability.getAllClaimingBuildings();
```

:::

:::group{name=getOwningColony}

Return Type: int

```zenscript
// IColonyTagCapability.getOwningColony() as int

myIColonyTagCapability.getOwningColony();
```

:::

:::group{name=getStaticClaimColonies}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// IColonyTagCapability.getStaticClaimColonies() as stdlib.List<int?>

myIColonyTagCapability.getStaticClaimColonies();
```

:::

:::group{name=removeBuildingClaim}

```zenscript
IColonyTagCapability.removeBuildingClaim(var1 as int, var2 as BlockPos, var3 as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | int                                                         |
| var2      | [BlockPos](/vanilla/api/util/math/BlockPos)                 |
| var3      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=removeColony}

```zenscript
IColonyTagCapability.removeColony(var1 as int, var2 as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | int                                                         |
| var2      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=reset}

```zenscript
IColonyTagCapability.reset(var1 as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=setCloseColonies}

```zenscript
IColonyTagCapability.setCloseColonies(var1 as stdlib.List<int?>)
```

| Parameter |          Type           |
|-----------|-------------------------|
| var1      | stdlib.List&lt;int?&gt; |


:::

:::group{name=setOwningColony}

```zenscript
IColonyTagCapability.setOwningColony(var1 as int, var2 as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| var1      | int                                                         |
| var2      | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::


