# PlayerInventoryChangedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.player.PlayerInventoryChangedEvent;
```


## Extending PlayerEvent

PlayerInventoryChangedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerInventoryChangedEvent

## Methods

:::group{name=getContainer}

Return Type: [Container](/mods/sixikutils/utils/world/ExpandContainer)

```zenscript
// PlayerInventoryChangedEvent.getContainer() as Container

myPlayerInventoryChangedEvent.getContainer();
```

:::

:::group{name=getIndex}

Return Type: int

```zenscript
// PlayerInventoryChangedEvent.getIndex() as int

myPlayerInventoryChangedEvent.getIndex();
```

:::

:::group{name=getInventory}

Return Type: [Inventory](/mods/sixikutils/utils/entity/type/player/inventory/ExpandInventory)

```zenscript
// PlayerInventoryChangedEvent.getInventory() as Inventory

myPlayerInventoryChangedEvent.getInventory();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// PlayerInventoryChangedEvent.getItem() as IItemStack

myPlayerInventoryChangedEvent.getItem();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// PlayerInventoryChangedEvent.getPlayer() as Player

myPlayerInventoryChangedEvent.getPlayer();
```

:::


## Properties

|   Name    |                                       Type                                       | Has Getter | Has Setter |
|-----------|----------------------------------------------------------------------------------|------------|------------|
| container | [Container](/mods/sixikutils/utils/world/ExpandContainer)                        | true       | false      |
| index     | int                                                                              | true       | false      |
| inventory | [Inventory](/mods/sixikutils/utils/entity/type/player/inventory/ExpandInventory) | true       | false      |
| item      | [IItemStack](/vanilla/api/item/IItemStack)                                       | true       | false      |
| player    | [Player](/mods/sixikutils/curios/player/Player)                                  | true       | false      |

