# PlayerChestCloseEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerChestCloseEvent;
```


## Extending PlayerEvent

PlayerChestCloseEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerChestCloseEvent

## Methods

:::group{name=getBlockEntity}

Return Type: [BlockEntity](/mods/sixikutils/utils/block/ExpandBlockEntity)

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

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// PlayerChestCloseEvent.getPlayer() as Player

myPlayerChestCloseEvent.getPlayer();
```

:::


## Properties

|   Name    |                             Type                              | Has Getter | Has Setter |
|-----------|---------------------------------------------------------------|------------|------------|
| block     | [BlockEntity](/mods/sixikutils/utils/block/ExpandBlockEntity) | true       | false      |
| openCount | int                                                           | true       | false      |
| player    | [Player](/mods/sixikutils/curios/player/Player)               | true       | false      |

