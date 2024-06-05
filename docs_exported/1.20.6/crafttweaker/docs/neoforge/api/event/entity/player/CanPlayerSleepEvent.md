# CanPlayerSleepEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.CanPlayerSleepEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.CanPlayerSleepEvent>(event => {
    println("CanPlayerSleepEvent ran!");
});
```


## Supertype

CanPlayerSleepEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in CanPlayerSleepEvent

## Properties

|      Name      |                                         Type                                          | Has Getter | Has Setter |
|----------------|---------------------------------------------------------------------------------------|------------|------------|
| entity         | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)                          | true       | false      |
| level          | [Level](/vanilla/api/world/Level)                                                     | true       | false      |
| pos            | [BlockPos](/vanilla/api/util/math/BlockPos)                                           | true       | false      |
| problem        | [PlayerBedSleepingProblem](/vanilla/api/entity/type/player/PlayerBedSleepingProblem)? | true       | true       |
| state          | [BlockState](/vanilla/api/block/BlockState)                                           | true       | false      |
| vanillaProblem | [PlayerBedSleepingProblem](/vanilla/api/entity/type/player/PlayerBedSleepingProblem)? | true       | false      |

