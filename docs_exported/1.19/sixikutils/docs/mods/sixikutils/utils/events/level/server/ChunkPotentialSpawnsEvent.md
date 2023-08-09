# ChunkPotentialSpawnsEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.world.level.ChunkPotentialSpawnsEvent;
```


## Extending LevelEvent

ChunkPotentialSpawnsEvent extends [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent). That means all methods available in [LevelEvent](/mods/sixikutils/utils/events/level/server/LevelEvent) are also available in ChunkPotentialSpawnsEvent

## Methods

:::group{name=getMobCategory}

Return Type: [MobCategory](/vanilla/api/entity/MobCategory)

```zenscript
// ChunkPotentialSpawnsEvent.getMobCategory() as MobCategory

myChunkPotentialSpawnsEvent.getMobCategory();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ChunkPotentialSpawnsEvent.getPos() as BlockPos

myChunkPotentialSpawnsEvent.getPos();
```

:::


