# PlayerXpLevelChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.xp.PlayerXpLevelChangeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.xp.PlayerXpLevelChangeEvent>(event => {
    println("PlayerXpLevelChangeEvent ran!");
});
```


## Supertype

PlayerXpLevelChangeEvent extends [PlayerXpEvent](/forge/api/event/xp/PlayerXpEvent). That means all methods available in [PlayerXpEvent](/forge/api/event/xp/PlayerXpEvent) are also available in PlayerXpLevelChangeEvent

## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| levels | int  | true       | true       |

