# PlayerChangeGameModeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.PlayerChangeGameModeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.PlayerChangeGameModeEvent>(event => {
    println("PlayerChangeGameModeEvent ran!");
});
```


## Supertype

PlayerChangeGameModeEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerChangeGameModeEvent

## Properties

|      Name       |                  Type                   | Has Getter | Has Setter |
|-----------------|-----------------------------------------|------------|------------|
| currentGameMode | [GameType](/vanilla/api/world/GameType) | true       | false      |
| newGameMode     | [GameType](/vanilla/api/world/GameType) | true       | true       |

