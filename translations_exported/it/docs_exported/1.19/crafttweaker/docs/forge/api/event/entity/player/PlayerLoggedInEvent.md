# PlayerLoggedInEvent

The playerLoggedIn event does not add any new Properties. Since it is a [PlayerEvent](/forge/api/event/entity/player/PlayerEvent), you can already access the player getter

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.PlayerLoggedInEvent;
```


## Extending PlayerEvent

PlayerLoggedInEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerLoggedInEvent

