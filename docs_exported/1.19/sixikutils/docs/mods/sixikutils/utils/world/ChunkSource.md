# ChunkSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.ChunkSource;
```


## Implemented Interfaces
ChunkSource implements the following interfaces. That means all methods defined in these interfaces are also available in ChunkSource

- AutoCloseable

## Methods

:::group{name=getChunkAccess}

Return Type: [Chunk](/mods/sixikutils/utils/world/Chunk)

```zenscript
ChunkSource.getChunkAccess(x as int, z as int, status as ChunkStatus, b as boolean) as Chunk
```

| Parameter |                          Type                           |
|-----------|---------------------------------------------------------|
| x         | int                                                     |
| z         | int                                                     |
| status    | [ChunkStatus](/mods/sixikutils/utils/world/ChunkStatus) |
| b         | boolean                                                 |


:::

:::group{name=getChunkLevel}

Return Type: [LevelChunk](/mods/sixikutils/utils/world/LevelChunk)

```zenscript
ChunkSource.getChunkLevel(x as int, z as int, b as boolean) as LevelChunk
```

| Parameter |  Type   |
|-----------|---------|
| x         | int     |
| z         | int     |
| b         | boolean |


:::

:::group{name=getChunkNow}

Return Type: [LevelChunk](/mods/sixikutils/utils/world/LevelChunk)

```zenscript
ChunkSource.getChunkNow(x as int, z as int) as LevelChunk
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| z         | int  |


:::

:::group{name=getLoadedChunksCount}

Return Type: int

```zenscript
// ChunkSource.getLoadedChunksCount() as int

myChunkSource.getLoadedChunksCount();
```

:::


