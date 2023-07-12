# LivingEntityUseItemStopEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.use.LivingEntityUseItemStopEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.use.LivingEntityUseItemStopEvent>(event => {
    println("LivingEntityUseItemStopEvent ran!");
});
```


## Supertype

LivingEntityUseItemStopEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemStopEvent

