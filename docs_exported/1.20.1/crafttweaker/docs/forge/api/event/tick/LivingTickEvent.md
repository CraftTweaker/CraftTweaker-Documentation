# LivingTickEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.tick.LivingTickEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.tick.LivingTickEvent>(event => {
    println("LivingTickEvent ran!");
});
```


## Supertype

LivingTickEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingTickEvent

