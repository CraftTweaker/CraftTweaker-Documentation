# ChunkCreateSpawnPositionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.world.level.ChunkCreateSpawnPositionEvent;
```


## Extending LevelEvent

ChunkCreateSpawnPositionEvent extends [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent). That means all methods available in [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent) are also available in ChunkCreateSpawnPositionEvent

## Methods

:::group{name=getLevelData}

Return Type: [ServerLevelData](/mods/sixikutils/utils/world/ServerLevelData)

```zenscript
// ChunkCreateSpawnPositionEvent.getLevelData() as ServerLevelData

myChunkCreateSpawnPositionEvent.getLevelData();
```

:::


## Properties

|   Name    |                              Type                               | Has Getter | Has Setter |
|-----------|-----------------------------------------------------------------|------------|------------|
| levelData | [ServerLevelData](/mods/sixikutils/utils/world/ServerLevelData) | true       | false      |

