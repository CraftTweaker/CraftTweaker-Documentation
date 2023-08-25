# PlayerSetSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.PlayerSetSpawnEvent;
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

:::group{name=getWorldSpawn}

Return Type: string

```zenscript
// PlayerSetSpawnEvent.getWorldSpawn() as string

myPlayerSetSpawnEvent.getWorldSpawn();
```

:::


## Properties

|    Name    |                    Type                     | Has Getter | Has Setter |
|------------|---------------------------------------------|------------|------------|
| newSpawn   | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| worldSpawn | string                                      | true       | false      |

