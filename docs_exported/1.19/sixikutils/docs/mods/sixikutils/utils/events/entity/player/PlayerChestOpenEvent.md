# PlayerChestOpenEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerChestOpenEvent;
```


## Extending PlayerEvent

PlayerChestOpenEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerChestOpenEvent

## Methods

:::group{name=getBlockEntity}

Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)

```zenscript
// PlayerChestOpenEvent.getBlockEntity() as BlockEntity

myPlayerChestOpenEvent.getBlockEntity();
```

:::

:::group{name=getOpenCount}

Return Type: int

```zenscript
// PlayerChestOpenEvent.getOpenCount() as int

myPlayerChestOpenEvent.getOpenCount();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// PlayerChestOpenEvent.getPlayer() as Player

myPlayerChestOpenEvent.getPlayer();
```

:::


## Properties

|   Name    |                         Type                         | Has Getter | Has Setter |
|-----------|------------------------------------------------------|------------|------------|
| block     | [BlockEntity](/vanilla/api/block/entity/BlockEntity) | true       | false      |
| openCount | int                                                  | true       | false      |
| player    | [Player](/vanilla/api/entity/type/player/Player)     | true       | false      |

