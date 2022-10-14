# ItemFishedEvent

This event is fired every time the player fishes up an item. It can be used to add or remove drops, change the durability damage, do other effects, and even prevent the fishing by canceling the event.

The event is cancelable.

If the event is canceled, will cause the player to receive no items at all

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.ItemFishedEvent;
```


## Extending PlayerEvent

ItemFishedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemFishedEvent

## Methods

:::group{name=damageRodBy}

Sets the amount of durability damage to inflict on the fishing rod.

Return Type: void

```zenscript
// ItemFishedEvent.damageRodBy(damage as int) as void

event.damageRodBy(5);
```

| Parameter | Type | Description                      |
| --------- | ---- | -------------------------------- |
| damage    | int  | The amount of durability damage. |


:::

:::group{name=getDrops}

Gets the list of items being fished up by the player.

Returns: The list of items being fished up by the player.  
Return Type: stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// ItemFishedEvent.getDrops() as stdlib.List<ItemStack>

event.getDrops();
```

:::

:::group{name=getItemDamage}

Gets the amount of durability damage to inflict on the fishing rod.

Returns: The amount of durability damage to inflict on the fishing rod.  
Return Type: int

```zenscript
// ItemFishedEvent.getItemDamage() as int

event.getItemDamage();
```

:::


## Properties

| Name        | Type                                                                    | Has Getter | Has Setter | Description                                                         |
| ----------- | ----------------------------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------- |
| damageRodBy | [ItemFishedEvent](/forge/api/event/entity/player/ItemFishedEvent)       | false      | true       | Sets the amount of durability damage to inflict on the fishing rod. |
| drops       | stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      | Gets the list of items being fished up by the player.               |
| itemDamage  | int                                                                     | true       | false      | Gets the amount of durability damage to inflict on the fishing rod. |

