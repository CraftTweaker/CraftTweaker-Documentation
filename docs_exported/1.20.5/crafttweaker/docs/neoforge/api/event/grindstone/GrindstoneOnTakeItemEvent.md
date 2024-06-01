# GrindstoneOnTakeItemEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.grindstone.GrindstoneOnTakeItemEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.grindstone.GrindstoneOnTakeItemEvent>(event => {
    println("GrindstoneOnTakeItemEvent ran!");
});
```


## Supertype

GrindstoneOnTakeItemEvent extends [GrindstoneEvent](/neoforge/api/event/grindstone/GrindstoneEvent). That means all methods available in [GrindstoneEvent](/neoforge/api/event/grindstone/GrindstoneEvent) are also available in GrindstoneOnTakeItemEvent

## Implemented Interfaces
GrindstoneOnTakeItemEvent implements the following interfaces. That means all methods defined in these interfaces are also available in GrindstoneOnTakeItemEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|     Name      |                    Type                    | Has Getter | Has Setter |
|---------------|--------------------------------------------|------------|------------|
| newBottomItem | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| newTopItem    | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| xp            | int                                        | true       | false      |

