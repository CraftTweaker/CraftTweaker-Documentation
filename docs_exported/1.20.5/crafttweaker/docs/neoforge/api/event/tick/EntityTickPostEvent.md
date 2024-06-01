# EntityTickPostEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.EntityTickPostEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.EntityTickPostEvent>(event => {
    println("EntityTickPostEvent ran!");
});
```


## Supertype

EntityTickPostEvent extends [EntityTickEvent](/neoforge/api/event/tick/EntityTickEvent). That means all methods available in [EntityTickEvent](/neoforge/api/event/tick/EntityTickEvent) are also available in EntityTickPostEvent

