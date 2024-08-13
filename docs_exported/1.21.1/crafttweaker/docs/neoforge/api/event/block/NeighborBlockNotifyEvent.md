# NeighborBlockNotifyEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.NeighborBlockNotifyEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.NeighborBlockNotifyEvent>(event => {
    println("NeighborBlockNotifyEvent ran!");
});
```


## Supertype

NeighborBlockNotifyEvent extends [BlockEvent](/neoforge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/neoforge/api/event/block/BlockEvent) are also available in NeighborBlockNotifyEvent

## Implemented Interfaces
NeighborBlockNotifyEvent implements the following interfaces. That means all methods defined in these interfaces are also available in NeighborBlockNotifyEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|        Name         |                             Type                              | Has Getter | Has Setter |
|---------------------|---------------------------------------------------------------|------------|------------|
| forceRedstoneUpdate | boolean                                                       | true       | false      |
| notifiedSides       | Set&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | true       | false      |

