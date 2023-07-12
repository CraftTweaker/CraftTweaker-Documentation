# PortalSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.block.PortalSpawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.block.PortalSpawnEvent>(event => {
    println("PortalSpawnEvent ran!");
});
```


## Supertype

PortalSpawnEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in PortalSpawnEvent

