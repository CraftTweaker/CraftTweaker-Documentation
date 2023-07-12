# AnvilUpdateEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.anvil.AnvilUpdateEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.anvil.AnvilUpdateEvent>(event => {
    println("AnvilUpdateEvent ran!");
});
```


## Supertype

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

