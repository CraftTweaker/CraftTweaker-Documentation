# PlayerDestroyItemEvent

This event is fired when a player destroys a tool or item. This happens after the tool has been destroyed and can not be used to prevent the destruction directly.

The event is not cancelable.

The event does not have a result.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.PlayerDestroyItemEvent;
```


## Extending PlayerEvent

PlayerDestroyItemEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerDestroyItemEvent

## Methoden

:::group{name=getHand}

Return Type: [InteractionHand](/vanilla/api/util/InteractionHand)

```zenscript
// PlayerDestroyItemEvent.getHand() as InteractionHand

event.getHand();
```

:::

:::group{name=getOriginal}

Gets a snapshot of the item from before it broke. Modifying this item will have no effect and it should be treated as unmodifiable.

Returns: The original item from before it was broken.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// PlayerDestroyItemEvent.getOriginal() as IItemStack

event.getOriginal();
```

:::


## Properties

| Name     | Type                                                 | Has Getter | Has Setter | Beschreibung                                                                                                                                      |
| -------- | ---------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| hand     | [InteractionHand](/vanilla/api/util/InteractionHand) | true       | false      | No Description Provided                                                                                                                           |
| original | [IItemStack](/vanilla/api/item/IItemStack)           | true       | false      | Gets a snapshot of the item from before it broke. Modifying this item <br />  will have no effect and it should be treated as unmodifiable. |

