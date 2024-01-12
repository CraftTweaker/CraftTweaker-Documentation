# AnvilUpdateEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.anvil.AnvilUpdateEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.anvil.AnvilUpdateEvent>(event => {
    println("AnvilUpdateEvent ran!");
});
```


## Supertype

AnvilUpdateEvent extends [Event](/neoforge/api/event/Event). That means all methods available in [Event](/neoforge/api/event/Event) are also available in AnvilUpdateEvent

## Implemented Interfaces
AnvilUpdateEvent implements the following interfaces. That means all methods defined in these interfaces are also available in AnvilUpdateEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

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

