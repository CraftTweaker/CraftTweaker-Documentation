# PlayerLoggedInEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.PlayerLoggedInEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.PlayerLoggedInEvent>(event => {
    println("PlayerLoggedInEvent ran!");
});
```


## Supertype

PlayerLoggedInEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerLoggedInEvent

