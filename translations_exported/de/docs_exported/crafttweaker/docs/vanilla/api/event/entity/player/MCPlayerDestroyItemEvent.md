# MCPlayerDestroyItemEvent

This event is fired when a player destroys a tool or item. This happens after the tool has been destroyed and can not be used to prevent the destruction directly.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerDestroyItemEvent;
```


## Extending MCPlayerEvent

MCPlayerDestroyItemEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCPlayerDestroyItemEvent

## Methoden

### getDestroyedItem

Gets a snapshot of the item from before it broke. Modifying this item will have no effect and it should be treated as unmodifiable.

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCPlayerDestroyItemEvent.getDestroyedItem() as IItemStack
event.getDestroyedItem();
```


## Properties

| Name          | Type                                        | Has Getter | Has Setter |
| ------------- | ------------------------------------------- | ---------- | ---------- |
| destroyedItem | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |

