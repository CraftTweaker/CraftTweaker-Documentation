# PlayerTickPreEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.PlayerTickPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.PlayerTickPreEvent>(event => {
    println("PlayerTickPreEvent ran!");
});
```


## Supertype

PlayerTickPreEvent extends [PlayerTickEvent](/neoforge/api/event/tick/PlayerTickEvent). That means all methods available in [PlayerTickEvent](/neoforge/api/event/tick/PlayerTickEvent) are also available in PlayerTickPreEvent

