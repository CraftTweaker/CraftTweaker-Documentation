# PlayerChestCloseEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.player.PlayerChestCloseEvent;
```


## Extending PlayerEvent

PlayerChestCloseEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerChestCloseEvent

## Methods

:::group{name=getBlockEntity}

Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)

```zenscript
// PlayerChestCloseEvent.getBlockEntity() as BlockEntity

myPlayerChestCloseEvent.getBlockEntity();
```

:::

:::group{name=getOpenCount}

Return Type: int

```zenscript
// PlayerChestCloseEvent.getOpenCount() as int

myPlayerChestCloseEvent.getOpenCount();
```

:::


## Properties

|   Name    |                         Type                         | Has Getter | Has Setter |
|-----------|------------------------------------------------------|------------|------------|
| block     | [BlockEntity](/vanilla/api/block/entity/BlockEntity) | true       | false      |
| openCount | int                                                  | true       | false      |

