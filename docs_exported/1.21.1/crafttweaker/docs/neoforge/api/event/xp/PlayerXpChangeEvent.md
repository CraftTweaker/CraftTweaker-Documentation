# PlayerXpChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.xp.PlayerXpChangeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.xp.PlayerXpChangeEvent>(event => {
    println("PlayerXpChangeEvent ran!");
});
```


## Supertype

PlayerXpChangeEvent extends [PlayerXpEvent](/neoforge/api/event/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/neoforge/api/event/xp/PlayerXpEvent) are also available in PlayerXpChangeEvent

## Implemented Interfaces
PlayerXpChangeEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PlayerXpChangeEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| amount | int  | true       | true       |

