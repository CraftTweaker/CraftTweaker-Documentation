# GrindstoneOnTakeItemEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.grindstone.GrindstoneOnTakeItemEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.grindstone.GrindstoneOnTakeItemEvent>(event => {
    println("GrindstoneOnTakeItemEvent ran!");
});
```


## Supertype

GrindstoneOnTakeItemEvent extends [GrindstoneEvent](/forge/api/event/grindstone/GrindstoneEvent). That means all methods available in [GrindstoneEvent](/forge/api/event/grindstone/GrindstoneEvent) are also available in GrindstoneOnTakeItemEvent

## Properties

|     Name      |                    Type                    | Has Getter | Has Setter |
|---------------|--------------------------------------------|------------|------------|
| newBottomItem | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| newTopItem    | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| xp            | int                                        | true       | false      |

