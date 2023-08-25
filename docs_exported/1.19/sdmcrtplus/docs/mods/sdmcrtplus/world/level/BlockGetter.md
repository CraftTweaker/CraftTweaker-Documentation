# BlockGetter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.BlockGetter;
```


## Implemented Interfaces
BlockGetter implements the following interfaces. That means all methods defined in these interfaces are also available in BlockGetter

- [LevelHeightAccessor](/mods/sdmcrtplus/world/level/LevelHeightAccessor)

## Methods

:::group{name=getBlockEntity}

Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)

```zenscript
BlockGetter.getBlockEntity(position as BlockPos) as BlockEntity
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBlockFloorHeight}

Return Type: double

```zenscript
BlockGetter.getBlockFloorHeight(position as BlockPos) as double
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getBlockState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
BlockGetter.getBlockState(position as BlockPos) as BlockState
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getLightEmission}

Return Type: stdlib.List&lt;[BlockState](/vanilla/api/block/BlockState)&gt;

```zenscript
BlockGetter.getLightEmission(aabb as AABB) as stdlib.List<BlockState>
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| aabb      | [AABB](/vanilla/api/util/math/AABB) |


:::

:::group{name=getLightEmission}

Return Type: int

```zenscript
BlockGetter.getLightEmission(position as BlockPos) as int
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::


