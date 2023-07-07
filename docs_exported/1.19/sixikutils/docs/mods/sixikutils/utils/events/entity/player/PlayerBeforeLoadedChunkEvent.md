# PlayerBeforeLoadedChunkEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.PlayerBeforeLoadedChunkEvent;
```


## Extending PlayerEvent

PlayerBeforeLoadedChunkEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerBeforeLoadedChunkEvent

## Methods

:::group{name=getChunk}

Return Type: [LevelChunk](/mods/sixikutils/utils/world/LevelChunk)

```zenscript
// PlayerBeforeLoadedChunkEvent.getChunk() as LevelChunk

myPlayerBeforeLoadedChunkEvent.getChunk();
```

:::


