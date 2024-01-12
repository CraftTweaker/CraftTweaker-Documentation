# PortalSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.PortalSpawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.PortalSpawnEvent>(event => {
    println("PortalSpawnEvent ran!");
});
```


## Supertype

PortalSpawnEvent extends [BlockEvent](/neoforge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/neoforge/api/event/block/BlockEvent) are also available in PortalSpawnEvent

## Implemented Interfaces
PortalSpawnEvent implements the following interfaces. That means all methods defined in these interfaces are also available in PortalSpawnEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

