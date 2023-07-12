# SleepingTimeCheckEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.SleepingTimeCheckEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.SleepingTimeCheckEvent>(event => {
    println("SleepingTimeCheckEvent ran!");
});
```


## Supertype

SleepingTimeCheckEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in SleepingTimeCheckEvent

## Properties

|       Name       |                    Type                     | Has Getter | Has Setter |
|------------------|---------------------------------------------|------------|------------|
| sleepingLocation | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |

