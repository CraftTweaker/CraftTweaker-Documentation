# PlayerSetSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerSetSpawnEvent;
```


## Extending PlayerEvent

PlayerSetSpawnEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerSetSpawnEvent

## Methods

:::group{name=getNewSpawn}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// PlayerSetSpawnEvent.getNewSpawn() as BlockPos

myPlayerSetSpawnEvent.getNewSpawn();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// PlayerSetSpawnEvent.getPlayer() as Player

myPlayerSetSpawnEvent.getPlayer();
```

:::

:::group{name=getSpawnWorld}

Return Type: string

```zenscript
// PlayerSetSpawnEvent.getSpawnWorld() as string

myPlayerSetSpawnEvent.getSpawnWorld();
```

:::


