# EntityItemPickupEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.item.EntityItemPickupEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.item.EntityItemPickupEvent>(event => {
    println("EntityItemPickupEvent ran!");
});
```


## Supertype

EntityItemPickupEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in EntityItemPickupEvent

## Implemented Interfaces
EntityItemPickupEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityItemPickupEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

| Name |                          Type                          | Has Getter | Has Setter |
|------|--------------------------------------------------------|------------|------------|
| item | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | true       | false      |

