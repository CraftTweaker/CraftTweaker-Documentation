# ItemCraftedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.player.ItemCraftedEvent;
```


## Extending PlayerEvent

ItemCraftedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemCraftedEvent

## Methods

:::group{name=getCrafting}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemCraftedEvent.getCrafting() as IItemStack

myItemCraftedEvent.getCrafting();
```

:::

:::group{name=getCraftingMatrix}

Return Type: [Container](/vanilla/api/world/Container)

```zenscript
// ItemCraftedEvent.getCraftingMatrix() as Container

myItemCraftedEvent.getCraftingMatrix();
```

:::


## Properties

| 名称        | Type                                       | Has Getter | Has Setter | Description             |
| --------- | ------------------------------------------ | ---------- | ---------- | ----------------------- |
| crafting  | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      | No Description Provided |
| inventory | [Container](/vanilla/api/world/Container)  | true       | false      | No Description Provided |

