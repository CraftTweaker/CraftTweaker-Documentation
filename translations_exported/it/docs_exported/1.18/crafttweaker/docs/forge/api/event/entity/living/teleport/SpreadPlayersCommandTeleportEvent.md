# SpreadPlayersCommandTeleportEvent

SpreadPlayersCommandTeleportEvent is fired before a living entity is teleported by the spread players command.

The event is cancelable.

If the event is canceled, the teleport won't happen.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.teleport.SpreadPlayersCommandTeleportEvent;
```


## Extending EntityTeleportEvent

SpreadPlayersCommandTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent) are also available in SpreadPlayersCommandTeleportEvent

