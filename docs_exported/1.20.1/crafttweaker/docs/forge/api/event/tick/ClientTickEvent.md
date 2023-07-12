# ClientTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.tick.ClientTickEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.tick.ClientTickEvent>(event => {
    println("ClientTickEvent ran!");
});
```


## Supertype

ClientTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in ClientTickEvent

