# ChunkPos

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.ChunkPos;
```


## Methods

:::group{name=getBlockAt}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
ChunkPos.getBlockAt(x as int, y as int, z as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |
| z         | int  |


:::

:::group{name=getBlockX}

Return Type: int

```zenscript
ChunkPos.getBlockX(num as int) as int
```

| Parameter | Type |
|-----------|------|
| num       | int  |


:::

:::group{name=getBlockZ}

Return Type: int

```zenscript
ChunkPos.getBlockZ(num as int) as int
```

| Parameter | Type |
|-----------|------|
| num       | int  |


:::

:::group{name=getMaxBlockX}

Return Type: int

```zenscript
// ChunkPos.getMaxBlockX() as int

myChunkPos.getMaxBlockX();
```

:::

:::group{name=getMaxBlockZ}

Return Type: int

```zenscript
// ChunkPos.getMaxBlockZ() as int

myChunkPos.getMaxBlockZ();
```

:::

:::group{name=getMiddleBlockPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
ChunkPos.getMiddleBlockPosition(num as int) as BlockPos
```

| Parameter | Type |
|-----------|------|
| num       | int  |


:::

:::group{name=getMiddleBlockX}

Return Type: int

```zenscript
// ChunkPos.getMiddleBlockX() as int

myChunkPos.getMiddleBlockX();
```

:::

:::group{name=getMiddleBlockZ}

Return Type: int

```zenscript
// ChunkPos.getMiddleBlockZ() as int

myChunkPos.getMiddleBlockZ();
```

:::

:::group{name=getMinBlockX}

Return Type: int

```zenscript
// ChunkPos.getMinBlockX() as int

myChunkPos.getMinBlockX();
```

:::

:::group{name=getMinBlockZ}

Return Type: int

```zenscript
// ChunkPos.getMinBlockZ() as int

myChunkPos.getMinBlockZ();
```

:::

:::group{name=getRegionLocalX}

Return Type: int

```zenscript
// ChunkPos.getRegionLocalX() as int

myChunkPos.getRegionLocalX();
```

:::

:::group{name=getRegionLocalZ}

Return Type: int

```zenscript
// ChunkPos.getRegionLocalZ() as int

myChunkPos.getRegionLocalZ();
```

:::

:::group{name=getRegionX}

Return Type: int

```zenscript
// ChunkPos.getRegionX() as int

myChunkPos.getRegionX();
```

:::

:::group{name=getRegionZ}

Return Type: int

```zenscript
// ChunkPos.getRegionZ() as int

myChunkPos.getRegionZ();
```

:::

:::group{name=getWorldPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ChunkPos.getWorldPosition() as BlockPos

myChunkPos.getWorldPosition();
```

:::


## Properties

|   Name   |                    Type                     | Has Getter | Has Setter |
|----------|---------------------------------------------|------------|------------|
| worldpos | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |

