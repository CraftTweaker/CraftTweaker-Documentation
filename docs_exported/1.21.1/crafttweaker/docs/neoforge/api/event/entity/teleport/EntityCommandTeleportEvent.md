# EntityCommandTeleportEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.teleport.EntityCommandTeleportEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.teleport.EntityCommandTeleportEvent>(event => {
    println("EntityCommandTeleportEvent ran!");
});
```


## Supertype

EntityCommandTeleportEvent extends [EntityTeleportEvent](/neoforge/api/event/entity/teleport/EntityTeleportEvent). That means all methods available in [EntityTeleportEvent](/neoforge/api/event/entity/teleport/EntityTeleportEvent) are also available in EntityCommandTeleportEvent

## Implemented Interfaces
EntityCommandTeleportEvent implements the following interfaces. That means all methods defined in these interfaces are also available in EntityCommandTeleportEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

