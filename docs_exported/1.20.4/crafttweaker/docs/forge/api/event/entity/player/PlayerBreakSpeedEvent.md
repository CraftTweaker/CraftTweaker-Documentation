# PlayerBreakSpeedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.PlayerBreakSpeedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.PlayerBreakSpeedEvent>(event => {
    println("PlayerBreakSpeedEvent ran!");
});
```


## Supertype

PlayerBreakSpeedEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerBreakSpeedEvent

## Properties

|     Name      |                     Type                     | Has Getter | Has Setter |
|---------------|----------------------------------------------|------------|------------|
| newSpeed      | float                                        | true       | true       |
| originalSpeed | float                                        | true       | false      |
| position      | [BlockPos](/vanilla/api/util/math/BlockPos)? | true       | false      |
| state         | [BlockState](/vanilla/api/block/BlockState)  | true       | false      |

