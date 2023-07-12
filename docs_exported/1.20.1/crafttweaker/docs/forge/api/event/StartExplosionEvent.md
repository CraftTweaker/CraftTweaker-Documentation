# StartExplosionEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.StartExplosionEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.StartExplosionEvent>(event => {
    println("StartExplosionEvent ran!");
});
```


## Supertype

StartExplosionEvent extends [ExplosionEvent](/forge/api/event/ExplosionEvent). That means all methods available in [ExplosionEvent](/forge/api/event/ExplosionEvent) are also available in StartExplosionEvent

