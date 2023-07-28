# BlockGetter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.BlockGetter;
```


## Methods

:::group{name=getBlockEntityData}

Gets the tile entity data for a tile entity at a given position.

Returns: The data of the tile entity.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// BlockGetter.getBlockEntityData(pos as BlockPos) as IData

myBlockGetter.getBlockEntityData(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |           Description            |
|-----------|---------------------------------------------|----------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position of the tile entity. |


:::

:::group{name=getBlockFloorHeight}

Return Type: double

```zenscript
BlockGetter.getBlockFloorHeight(pos as BlockPos) as double
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBlockState}

Gets the block state at a given position.

Returns: The block state at the position.  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockGetter.getBlockState(pos as BlockPos) as BlockState

myBlockGetter.getBlockState(new BlockPos(0, 1, 2));
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) | The position to look up. |


:::

:::group{name=getLightEmission}

Return Type: int

```zenscript
BlockGetter.getLightEmission(pos as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


## Properties

|     Name      | Type | Has Getter | Has Setter |
|---------------|------|------------|------------|
| maxLightLevel | int  | true       | false      |

