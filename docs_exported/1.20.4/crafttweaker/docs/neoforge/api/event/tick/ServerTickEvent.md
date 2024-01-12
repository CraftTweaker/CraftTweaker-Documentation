# ServerTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.ServerTickEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.ServerTickEvent>(event => {
    println("ServerTickEvent ran!");
});
```


## Supertype

ServerTickEvent extends [TickEvent](/neoforge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/neoforge/api/event/tick/TickEvent) are also available in ServerTickEvent

## Properties

|  Name   |                Type                | Has Getter | Has Setter |
|---------|------------------------------------|------------|------------|
| hasTime | boolean                            | true       | false      |
| server  | [Server](/vanilla/api/game/Server) | true       | false      |

