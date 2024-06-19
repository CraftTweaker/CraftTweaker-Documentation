# LivingEntityUseItemStartEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.use.LivingEntityUseItemStartEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.use.LivingEntityUseItemStartEvent>(event => {
    println("LivingEntityUseItemStartEvent ran!");
});
```


## Supertype

LivingEntityUseItemStartEvent extends [LivingEntityUseItemEvent](/neoforge/api/event/entity/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/neoforge/api/event/entity/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemStartEvent

## Implemented Interfaces
LivingEntityUseItemStartEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingEntityUseItemStartEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

