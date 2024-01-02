# LivingKnockBackEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LivingKnockBackEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LivingKnockBackEvent>(event => {
    println("LivingKnockBackEvent ran!");
});
```


## Supertype

LivingKnockBackEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LivingKnockBackEvent

## Implemented Interfaces
LivingKnockBackEvent implements the following interfaces. That means all methods defined in these interfaces are also available in LivingKnockBackEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|       Name       |  Type  | Has Getter | Has Setter |
|------------------|--------|------------|------------|
| originalRatioX   | double | true       | false      |
| originalRatioZ   | double | true       | false      |
| originalStrength | float  | true       | false      |
| ratioX           | double | true       | true       |
| ratioZ           | double | true       | true       |
| strength         | float  | true       | true       |

