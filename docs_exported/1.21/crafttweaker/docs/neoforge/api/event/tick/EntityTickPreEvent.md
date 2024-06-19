# EntityTickPreEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.tick.EntityTickPreEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.tick.EntityTickPreEvent>(event => {
    println("EntityTickPreEvent ran!");
});
```


## Supertype

EntityTickPreEvent extends [EntityTickEvent](/neoforge/api/event/tick/EntityTickEvent). That means all methods available in [EntityTickEvent](/neoforge/api/event/tick/EntityTickEvent) are also available in EntityTickPreEvent

## Implemented Interfaces
EntityTickPreEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityTickPreEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

