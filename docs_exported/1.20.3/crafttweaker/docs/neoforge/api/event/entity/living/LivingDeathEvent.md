# LivingDeathEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingDeathEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingDeathEvent>(event => {
    println("LivingDeathEvent ran!");
});
```


## Supertype

LivingDeathEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LivingDeathEvent

## Implemented Interfaces
LivingDeathEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingDeathEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                          Type                          | Has Getter | Has Setter |
|--------|--------------------------------------------------------|------------|------------|
| source | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |

