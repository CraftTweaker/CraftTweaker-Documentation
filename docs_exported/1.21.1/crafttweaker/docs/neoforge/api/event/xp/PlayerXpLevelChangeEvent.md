# PlayerXpLevelChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.xp.PlayerXpLevelChangeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.xp.PlayerXpLevelChangeEvent>(event => {
    println("PlayerXpLevelChangeEvent ran!");
});
```


## Supertype

PlayerXpLevelChangeEvent extends [PlayerXpEvent](/neoforge/api/event/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/neoforge/api/event/xp/PlayerXpEvent) are also available in PlayerXpLevelChangeEvent

## Implemented Interfaces
PlayerXpLevelChangeEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PlayerXpLevelChangeEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| levels | int  | true       | true       |

