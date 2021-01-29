# MCItemFishedEvent

This event is fired every time the player fishes up an item. It can be used
 to add or remove drops, change the durability damage, do other effects, and
 even prevent the fishing by canceling the event.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCItemFishedEvent;
```


## Extending MCPlayerEvent

MCItemFishedEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemFishedEvent

## Methods

### getDrops

Gets the list of items being fished up by the player.

Return Type: stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
MCItemFishedEvent.getDrops() as stdlib.List<ItemStack>
event.getDrops();
```
### getItemDamage

Gets the amount of durability damage to inflict on the fishing rod.

Return Type: int

```zenscript
MCItemFishedEvent.getItemDamage() as int
event.getItemDamage();
```
### setItemDamage

Sets the amount of durability damage to inflict on the fishing rod.

Return Type: void

```zenscript
MCItemFishedEvent.setItemDamage(damage as int) as void
event.setItemDamage(5);
```
| Parameter | Type | Description |
|-----------|------|-------------|
| damage | int | The amount of durability damage. |


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| drops | stdlib.List&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true | false |
| itemDamage | int | true | true |

