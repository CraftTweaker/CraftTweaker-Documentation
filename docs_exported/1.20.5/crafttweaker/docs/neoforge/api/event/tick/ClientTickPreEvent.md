# ClientTickPreEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.ClientTickPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.ClientTickPreEvent>(event => {
    println("ClientTickPreEvent ran!");
});
```


## Supertype

ClientTickPreEvent extends [ClientTickEvent](/neoforge/api/event/tick/ClientTickEvent). That means all methods available in [ClientTickEvent](/neoforge/api/event/tick/ClientTickEvent) are also available in ClientTickPreEvent

