# BlockBreakEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.block.BlockBreakEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.block.BlockBreakEvent>(event => {
    println("BlockBreakEvent ran!");
});
```


## Supertype

BlockBreakEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockBreakEvent

## Properties

|   Name    |                       Type                       | Has Getter | Has Setter |
|-----------|--------------------------------------------------|------------|------------|
| expToDrop | int                                              | true       | true       |
| player    | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

