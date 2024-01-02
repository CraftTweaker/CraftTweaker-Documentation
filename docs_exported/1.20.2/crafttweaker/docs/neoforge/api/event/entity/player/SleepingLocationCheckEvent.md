# SleepingLocationCheckEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.SleepingLocationCheckEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.SleepingLocationCheckEvent>(event => {
    println("SleepingLocationCheckEvent ran!");
});
```


## Supertype

SleepingLocationCheckEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in SleepingLocationCheckEvent

## Properties

|       Name       |                    Type                     | Has Getter | Has Setter |
|------------------|---------------------------------------------|------------|------------|
| sleepingLocation | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |

