# GrindstoneOnPlaceItemEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.grindstone.GrindstoneOnPlaceItemEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.grindstone.GrindstoneOnPlaceItemEvent>(event => {
    println("GrindstoneOnPlaceItemEvent ran!");
});
```


## Supertype

GrindstoneOnPlaceItemEvent extends [GrindstoneEvent](/neoforge/api/event/grindstone/GrindstoneEvent). That means all methods available in [GrindstoneEvent](/neoforge/api/event/grindstone/GrindstoneEvent) are also available in GrindstoneOnPlaceItemEvent

## Implemented Interfaces
GrindstoneOnPlaceItemEvent implements the following interfaces. That means all methods defined in these interfaces are also available in GrindstoneOnPlaceItemEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                    Type                    | Has Getter | Has Setter |
|--------|--------------------------------------------|------------|------------|
| output | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |

