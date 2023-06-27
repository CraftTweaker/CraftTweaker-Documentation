# LevelReader

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.LevelReader;
```


## Implemented Interfaces
LevelReader implements the following interfaces. That means all methods defined in these interfaces are also available in LevelReader

- [BlockAndTintGetter](/vanilla/api/world/BlockAndTintGetter)

## Methods

:::group{name=canSeeSkyFromBelowWater}

Return Type: boolean

```zenscript
LevelReader.canSeeSkyFromBelowWater(pos as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBiome}

Gets the biome at a given position.

Returns: The biome at the given position.  
Return Type: [Biome](/vanilla/api/world/biome/Biome)

```zenscript
// LevelReader.getBiome(pos as BlockPos) as Biome

myLevelReader.getBiome(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=hasChunk}

Return Type: boolean

```zenscript
LevelReader.hasChunk(x as int, z as int) as boolean
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| z         | int  |


:::

:::group{name=isEmptyBlock}

Checks if the block at a given position is empty.

Returns: Whether the block is empty.  
Return Type: boolean

```zenscript
// LevelReader.isEmptyBlock(pos as BlockPos) as boolean

myLevelReader.isEmptyBlock(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=isWaterAt}

Return Type: boolean

```zenscript
LevelReader.isWaterAt(pos as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


## Properties

|     Name     |  Type   | Has Getter | Has Setter |            Description            |
|--------------|---------|------------|------------|-----------------------------------|
| isClientSide | boolean | true       | false      |                                   |
| seaLevel     | int     | true       | false      | Gets the height of the sea level. |
| skyDarken    | int     | true       | false      |                                   |

