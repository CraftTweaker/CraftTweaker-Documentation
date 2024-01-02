# BlockBreakEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.BlockBreakEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.BlockBreakEvent>(event => {
    println("BlockBreakEvent ran!");
});
```


## Supertype

BlockBreakEvent extends [BlockEvent](/neoforge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/neoforge/api/event/block/BlockEvent) are also available in BlockBreakEvent

## Implemented Interfaces
BlockBreakEvent implements the following interfaces. That means all methods defined in these interfaces are also available in BlockBreakEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|   Name    |                       Type                       | Has Getter | Has Setter |
|-----------|--------------------------------------------------|------------|------------|
| expToDrop | int                                              | true       | true       |
| player    | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

