# MCItemFishedEvent

This event is fired every time the player fishes up an item. It can be used to add or remove drops, change the durability damage, do other effects, and even prevent the fishing by canceling the event.

The event is cancelable.

If the event is canceled, will cause the player to receive no items at all

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCItemFishedEvent;
```


## Extending MCPlayerEvent

MCItemFishedEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemFishedEvent

## Metodi

:::group{name=getDrops}

Gets the list of items being fished up by the player.

Returns: The list of items being fished up by the player.  
Return Type: stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// MCItemFishedEvent.getDrops() as stdlib.List<ItemStack>

event.getDrops();
```

:::

:::group{name=getItemDamage}

Gets the amount of durability damage to inflict on the fishing rod.

Returns: The amount of durability damage to inflict on the fishing rod.  
Return Type: int

```zenscript
// MCItemFishedEvent.getItemDamage() as int

event.getItemDamage();
```

:::

:::group{name=setItemDamage}

Sets the amount of durability damage to inflict on the fishing rod.

Return Type: void

```zenscript
// MCItemFishedEvent.setItemDamage(damage as int) as void

event.setItemDamage(5);
```

| Parametro | Tipo | Descrizione                      |
| --------- | ---- | -------------------------------- |
| damage    | int  | The amount of durability damage. |


:::


## Proprietà

| Nome       | Tipo                                                                    | Ha Getter | Ha Setter | Descrizione                                                         |
| ---------- | ----------------------------------------------------------------------- | --------- | --------- | ------------------------------------------------------------------- |
| drops      | stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | sì        | no        | Gets the list of items being fished up by the player.               |
| itemDamage | int                                                                     | sì        | sì        | Gets the amount of durability damage to inflict on the fishing rod. |

