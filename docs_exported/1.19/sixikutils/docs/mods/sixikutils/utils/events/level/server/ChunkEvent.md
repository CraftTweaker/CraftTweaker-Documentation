# ChunkEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.world.level.ChunkEvent;
```


## Extending LevelEvent

ChunkEvent extends [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent). That means all methods available in [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent) are also available in ChunkEvent

## Methods

:::group{name=getChunk}

Return Type: [Chunk](/mods/sixikutils/utils/world/Chunk)

```zenscript
// ChunkEvent.getChunk() as Chunk

myChunkEvent.getChunk();
```

:::


## Properties

| Name  |                    Type                     | Has Getter | Has Setter |
|-------|---------------------------------------------|------------|------------|
| chunk | [Chunk](/mods/sixikutils/utils/world/Chunk) | true       | false      |

