# StartExplosionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.StartExplosionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.StartExplosionEvent>(event => {
    println("StartExplosionEvent ran!");
});
```


## Supertype

StartExplosionEvent extends [ExplosionEvent](/neoforge/api/event/ExplosionEvent). That means all methods available in [ExplosionEvent](/neoforge/api/event/ExplosionEvent) are also available in StartExplosionEvent

## Implemented Interfaces
StartExplosionEvent implements the following interfaces. That means all methods defined in these interfaces are also available in StartExplosionEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

