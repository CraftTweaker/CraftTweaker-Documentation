# ClientTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.ClientTickEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.ClientTickEvent>(event => {
    println("ClientTickEvent ran!");
});
```


## Supertype

ClientTickEvent extends [TickEvent](/neoforge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/neoforge/api/event/tick/TickEvent) are also available in ClientTickEvent

