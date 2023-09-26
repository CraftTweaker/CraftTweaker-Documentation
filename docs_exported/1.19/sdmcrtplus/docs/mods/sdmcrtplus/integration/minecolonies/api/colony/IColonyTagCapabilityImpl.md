# IColonyTagCapabilityImpl

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.IColonyTagCapabilityImpl;
```


## Implemented Interfaces
IColonyTagCapabilityImpl implements the following interfaces. That means all methods defined in these interfaces are also available in IColonyTagCapabilityImpl

- [IColonyTagCapability](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColonyTagCapability)

## Methods

:::group{name=addBuildingClaim}

```zenscript
IColonyTagCapabilityImpl.addBuildingClaim(colonyId as int, pos as BlockPos, chunk as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| colonyId  | int                                                         |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                 |
| chunk     | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=addColony}

```zenscript
IColonyTagCapabilityImpl.addColony(id as int, chunk as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| id        | int                                                         |
| chunk     | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=getAllClaimingBuildings}

Return Type: Set&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;[int?]

```zenscript
// IColonyTagCapabilityImpl.getAllClaimingBuildings() as Set<BlockPos>[int?]

myIColonyTagCapabilityImpl.getAllClaimingBuildings();
```

:::

:::group{name=getOwningColony}

Return Type: int

```zenscript
// IColonyTagCapabilityImpl.getOwningColony() as int

myIColonyTagCapabilityImpl.getOwningColony();
```

:::

:::group{name=getStaticClaimColonies}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// IColonyTagCapabilityImpl.getStaticClaimColonies() as stdlib.List<int?>

myIColonyTagCapabilityImpl.getStaticClaimColonies();
```

:::

:::group{name=removeBuildingClaim}

```zenscript
IColonyTagCapabilityImpl.removeBuildingClaim(colonyId as int, pos as BlockPos, chunk as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| colonyId  | int                                                         |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                 |
| chunk     | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=removeColony}

```zenscript
IColonyTagCapabilityImpl.removeColony(id as int, chunk as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| id        | int                                                         |
| chunk     | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=reset}

```zenscript
IColonyTagCapabilityImpl.reset(chunk as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| chunk     | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::

:::group{name=setCloseColonies}

```zenscript
IColonyTagCapabilityImpl.setCloseColonies(colonies as stdlib.List<int?>)
```

| Parameter |          Type           |
|-----------|-------------------------|
| colonies  | stdlib.List&lt;int?&gt; |


:::

:::group{name=setOwningColony}

```zenscript
IColonyTagCapabilityImpl.setOwningColony(id as int, chunk as LevelChunk)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| id        | int                                                         |
| chunk     | [LevelChunk](/mods/sdmcrtplus/world/level/chunk/LevelChunk) |


:::


