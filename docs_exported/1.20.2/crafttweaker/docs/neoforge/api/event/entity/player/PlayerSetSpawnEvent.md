# PlayerSetSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.PlayerSetSpawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.PlayerSetSpawnEvent>(event => {
    println("PlayerSetSpawnEvent ran!");
});
```


## Supertype

PlayerSetSpawnEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in PlayerSetSpawnEvent

## Implemented Interfaces
PlayerSetSpawnEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PlayerSetSpawnEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|    Name    |                            Type                            | Has Getter | Has Setter |
|------------|------------------------------------------------------------|------------|------------|
| isForced   | boolean                                                    | true       | false      |
| newSpawn   | [BlockPos](/vanilla/api/util/math/BlockPos)?               | true       | false      |
| spawnLevel | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |

