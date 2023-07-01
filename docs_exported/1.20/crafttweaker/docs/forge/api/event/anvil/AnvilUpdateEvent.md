# AnvilUpdateEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.anvil.AnvilUpdateEvent;
```


## Extending Event

AnvilUpdateEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in AnvilUpdateEvent

## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| cost         | int                                              | true       | true       |
| left         | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |
| materialCost | int                                              | true       | true       |
| name         | string?                                          | true       | false      |
| output       | [IItemStack](/vanilla/api/item/IItemStack)       | true       | true       |
| player       | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |
| right        | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |

