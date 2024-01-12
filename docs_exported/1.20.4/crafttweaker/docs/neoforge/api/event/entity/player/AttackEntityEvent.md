# AttackEntityEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.AttackEntityEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.AttackEntityEvent>(event => {
    println("AttackEntityEvent ran!");
});
```


## Supertype

AttackEntityEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in AttackEntityEvent

## Implemented Interfaces
AttackEntityEvent implements the following interfaces. That means all methods defined in these interfaces are also available in AttackEntityEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                 Type                 | Has Getter | Has Setter |
|--------|--------------------------------------|------------|------------|
| target | [Entity](/vanilla/api/entity/Entity) | true       | false      |

