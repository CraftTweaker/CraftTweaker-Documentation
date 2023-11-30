# EntitySpreadPlayersCommandTeleportEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.teleport.EntitySpreadPlayersCommandTeleportEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.teleport.EntitySpreadPlayersCommandTeleportEvent>(event => {
    println("EntitySpreadPlayersCommandTeleportEvent ran!");
});
```


## Supertype

EntitySpreadPlayersCommandTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/teleport/EntityTeleportEvent) are also available in EntitySpreadPlayersCommandTeleportEvent

