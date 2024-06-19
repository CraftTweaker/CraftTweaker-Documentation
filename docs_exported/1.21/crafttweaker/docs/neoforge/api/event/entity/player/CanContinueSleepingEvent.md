# CanContinueSleepingEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.CanContinueSleepingEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.CanContinueSleepingEvent>(event => {
    println("CanContinueSleepingEvent ran!");
});
```


## Supertype

CanContinueSleepingEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in CanContinueSleepingEvent

## Properties

|       Name       |                                          Type                                          | Has Getter | Has Setter |
|------------------|----------------------------------------------------------------------------------------|------------|------------|
| continueSleeping | [CanContinueSleepingEvent](/neoforge/api/event/entity/player/CanContinueSleepingEvent) | true       | true       |
| problem          | [PlayerBedSleepingProblem](/vanilla/api/entity/type/player/PlayerBedSleepingProblem)?  | true       | false      |

