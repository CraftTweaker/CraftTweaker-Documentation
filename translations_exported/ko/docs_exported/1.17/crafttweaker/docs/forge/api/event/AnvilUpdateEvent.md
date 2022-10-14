# AnvilUpdateEvent

AnvilUpdateEvent is fired when the inputs (either input stack, or the name) of an anvil are changed. You can listen to this event to add custom anvil recipes.

The event is cancelable.

If the event is canceled, vanilla behavior will not run, and the output will be set to `<item:minecraft:air>`.

If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.AnvilUpdateEvent;
```


## Extending Event

AnvilUpdateEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in AnvilUpdateEvent

## Properties

| 이름           | Type                                             | Has Getter | Has Setter | Description             |
| ------------ | ------------------------------------------------ | ---------- | ---------- | ----------------------- |
| left         | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      | No Description Provided |
| levelCost    | int                                              | true       | true       | No Description Provided |
| materialCost | int                                              | true       | true       | No Description Provided |
| name         | **invalid**                                      | true       | false      | No Description Provided |
| output       | [IItemStack](/vanilla/api/item/IItemStack)       | true       | true       | No Description Provided |
| player       | [Player](/vanilla/api/entity/type/player/Player) | true       | false      | No Description Provided |
| right        | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      | No Description Provided |

