# ItemFishedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.ItemFishedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.ItemFishedEvent>(event => {
    println("ItemFishedEvent ran!");
});
```


## Supertype

ItemFishedEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in ItemFishedEvent

## Implemented Interfaces
ItemFishedEvent implements the following interfaces. That means all methods defined in these interfaces are also available in ItemFishedEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|    Name    |                              Type                              | Has Getter | Has Setter |
|------------|----------------------------------------------------------------|------------|------------|
| drops      | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;  | true       | true       |
| hookEntity | [FishingHook](/vanilla/api/entity/type/projectile/FishingHook) | true       | false      |
| rodDamage  | int                                                            | true       | true       |

