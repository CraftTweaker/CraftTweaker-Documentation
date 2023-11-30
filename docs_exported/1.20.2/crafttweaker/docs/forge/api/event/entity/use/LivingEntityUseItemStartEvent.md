# LivingEntityUseItemStartEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.use.LivingEntityUseItemStartEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.use.LivingEntityUseItemStartEvent>(event => {
    println("LivingEntityUseItemStartEvent ran!");
});
```


## Supertype

LivingEntityUseItemStartEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemStartEvent

