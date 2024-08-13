# ServerTickPostEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.ServerTickPostEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.ServerTickPostEvent>(event => {
    println("ServerTickPostEvent ran!");
});
```


## Supertype

ServerTickPostEvent extends [ServerTickEvent](/neoforge/api/event/tick/ServerTickEvent). That means all methods available in [ServerTickEvent](/neoforge/api/event/tick/ServerTickEvent) are also available in ServerTickPostEvent

