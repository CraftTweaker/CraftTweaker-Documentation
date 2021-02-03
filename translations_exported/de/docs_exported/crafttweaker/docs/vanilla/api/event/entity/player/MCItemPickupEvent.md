# MCItemPickupEvent

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCItemPickupEvent;
```


## Extending MCPlayerEvent

MCItemPickupEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCItemPickupEvent

## Methoden

### getStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCItemPickupEvent.getStack() as IItemStack
myMCItemPickupEvent.getStack();
```


## Properties

| Name  | Type                                        | Has Getter | Has Setter |
| ----- | ------------------------------------------- | ---------- | ---------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | true       | false      |

