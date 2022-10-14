# ItemFishedEvent

This event is fired every time the player fishes up an item. It can be used to add or remove drops, change the durability damage, do other effects, and even prevent the fishing by canceling the event.

The event is cancelable.

If the event is canceled, will cause the player to receive no items at all

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.ItemFishedEvent;
```


## Extending PlayerEvent

ItemFishedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemFishedEvent

## Metodi

:::group{name=damageRodBy}

Sets the amount of durability damage to inflict on the fishing rod.

Return Type: void

```zenscript
// ItemFishedEvent.damageRodBy(damage as int) as void

event.damageRodBy(5);
```

| Parametro | Tipo | Descrizione                      |
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


## Proprietà

| Nome        | Tipo                                                                    | Ha Getter | Ha Setter | Descrizione                                                         |
| ----------- | ----------------------------------------------------------------------- | --------- | --------- | ------------------------------------------------------------------- |
| damageRodBy | [ItemFishedEvent](/forge/api/event/entity/player/ItemFishedEvent)       | no        | sì        | Sets the amount of durability damage to inflict on the fishing rod. |
| drops       | stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | sì        | no        | Gets the list of items being fished up by the player.               |
| itemDamage  | int                                                                     | sì        | no        | Gets the amount of durability damage to inflict on the fishing rod. |

