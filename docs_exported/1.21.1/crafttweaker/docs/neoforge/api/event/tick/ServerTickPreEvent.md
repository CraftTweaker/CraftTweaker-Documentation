# ServerTickPreEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.ServerTickPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.ServerTickPreEvent>(event => {
    println("ServerTickPreEvent ran!");
});
```


## Supertype

ServerTickPreEvent extends [ServerTickEvent](/neoforge/api/event/tick/ServerTickEvent). That means all methods available in [ServerTickEvent](/neoforge/api/event/tick/ServerTickEvent) are also available in ServerTickPreEvent

