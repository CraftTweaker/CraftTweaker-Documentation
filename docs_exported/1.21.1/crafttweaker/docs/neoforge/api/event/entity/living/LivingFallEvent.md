# LivingFallEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingFallEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingFallEvent>(event => {
    println("LivingFallEvent ran!");
});
```


## Supertype

LivingFallEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LivingFallEvent

## Implemented Interfaces
LivingFallEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingFallEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|       Name       | Type  | Has Getter | Has Setter |
|------------------|-------|------------|------------|
| damageMultiplier | float | true       | true       |
| distance         | float | true       | true       |

