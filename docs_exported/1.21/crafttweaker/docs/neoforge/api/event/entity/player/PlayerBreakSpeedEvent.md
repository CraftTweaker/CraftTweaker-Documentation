# PlayerBreakSpeedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.PlayerBreakSpeedEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.PlayerBreakSpeedEvent>(event => {
    println("PlayerBreakSpeedEvent ran!");
});
```


## Supertype

PlayerBreakSpeedEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in PlayerBreakSpeedEvent

## Implemented Interfaces
PlayerBreakSpeedEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PlayerBreakSpeedEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|     Name      |                     Type                     | Has Getter | Has Setter |
|---------------|----------------------------------------------|------------|------------|
| newSpeed      | float                                        | true       | true       |
| originalSpeed | float                                        | true       | false      |
| position      | [BlockPos](/vanilla/api/util/math/BlockPos)? | true       | false      |
| state         | [BlockState](/vanilla/api/block/BlockState)  | true       | false      |

