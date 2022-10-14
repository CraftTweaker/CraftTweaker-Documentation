# TeleportCommandTeleportEvent

SpreadPlayersCommandTeleportEvent is fired before a living entity is teleported by the teleport command.

The event is cancelable.

If the event is canceled, the teleport won't happen.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.teleport.TeleportCommandTeleportEvent;
```


## Extending EntityTeleportEvent

TeleportCommandTeleportEvent extends [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/forge/api/event/entity/living/teleport/EntityTeleportEvent) are also available in TeleportCommandTeleportEvent

