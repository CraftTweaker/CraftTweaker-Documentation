# PlayerSleepInBedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.PlayerSleepInBedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.PlayerSleepInBedEvent>(event => {
    println("PlayerSleepInBedEvent ran!");
});
```


## Supertype

PlayerSleepInBedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerSleepInBedEvent

## Properties

|  Name  |                                         Type                                         | Has Getter | Has Setter |
|--------|--------------------------------------------------------------------------------------|------------|------------|
| pos    | [BlockPos](/vanilla/api/util/math/BlockPos)?                                         | true       | false      |
| result | [PlayerBedSleepingProblem](/vanilla/api/entity/type/player/PlayerBedSleepingProblem) | true       | true       |

