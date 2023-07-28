# FarmlandTrampleEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.block.FarmlandTrampleEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.block.FarmlandTrampleEvent>(event => {
    println("FarmlandTrampleEvent ran!");
});
```


## Supertype

FarmlandTrampleEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in FarmlandTrampleEvent

## Properties

|     Name     |                 Type                 | Has Getter | Has Setter |
|--------------|--------------------------------------|------------|------------|
| entity       | [Entity](/vanilla/api/entity/Entity) | true       | false      |
| fallDistance | float                                | true       | false      |

