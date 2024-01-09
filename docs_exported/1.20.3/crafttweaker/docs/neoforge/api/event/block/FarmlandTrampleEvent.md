# FarmlandTrampleEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.FarmlandTrampleEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.FarmlandTrampleEvent>(event => {
    println("FarmlandTrampleEvent ran!");
});
```


## Supertype

FarmlandTrampleEvent extends [BlockEvent](/neoforge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/neoforge/api/event/block/BlockEvent) are also available in FarmlandTrampleEvent

## Implemented Interfaces
FarmlandTrampleEvent implements the following interfaces. That means all methods defined in these interfaces are also available in FarmlandTrampleEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|     Name     |                 Type                 | Has Getter | Has Setter |
|--------------|--------------------------------------|------------|------------|
| entity       | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| fallDistance | float                                | true       | false      |

