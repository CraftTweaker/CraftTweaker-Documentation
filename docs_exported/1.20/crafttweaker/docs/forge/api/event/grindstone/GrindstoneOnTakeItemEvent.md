# GrindstoneOnTakeItemEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.grindstone.GrindstoneOnTakeItemEvent;
```


## Extending GrindstoneEvent

GrindstoneOnTakeItemEvent extends [GrindstoneEvent](/forge/api/event/grindstone/GrindstoneEvent). That means all methods available in [GrindstoneEvent](/forge/api/event/grindstone/GrindstoneEvent) are also available in GrindstoneOnTakeItemEvent

## Properties

|     Name      |                    Type                    | Has Getter | Has Setter |
|---------------|--------------------------------------------|------------|------------|
| newBottomItem | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| newTopItem    | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |
| xp            | int                                        | true       | false      |

