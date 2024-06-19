# ArrowLooseEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.arrow.ArrowLooseEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.arrow.ArrowLooseEvent>(event => {
    println("ArrowLooseEvent ran!");
});
```


## Supertype

ArrowLooseEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in ArrowLooseEvent

## Implemented Interfaces
ArrowLooseEvent implements the following interfaces. That means all methods defined in these interfaces are also available in ArrowLooseEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                    Type                    | Has Getter | Has Setter |
|--------|--------------------------------------------|------------|------------|
| ammo   | boolean                                    | true       | false      |
| bow    | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |
| charge | int                                        | true       | true       |
| level  | [Level](/vanilla/api/world/Level)          | true       | false      |

