# ItemPickupEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemPickupEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemPickupEvent>(event => {
    println("ItemPickupEvent ran!");
});
```


## Supertype

ItemPickupEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in ItemPickupEvent

## Properties

|      Name      |                          Type                          | Has Getter | Has Setter |
|----------------|--------------------------------------------------------|------------|------------|
| originalEntity | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | true       | false      |
| stack          | [IItemStack](/vanilla/api/item/IItemStack)             | true       | false      |

