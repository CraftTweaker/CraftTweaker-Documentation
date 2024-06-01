# CreateFluidSourceEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.fluid.CreateFluidSourceEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.fluid.CreateFluidSourceEvent>(event => {
    println("CreateFluidSourceEvent ran!");
});
```


## Supertype

CreateFluidSourceEvent extends [Event](/neoforge/api/event/Event). That means all methods available in [Event](/neoforge/api/event/Event) are also available in CreateFluidSourceEvent

## Properties

| Name  |                    Type                     | Has Getter | Has Setter |
|-------|---------------------------------------------|------------|------------|
| level | [Level](/vanilla/api/world/Level)           | true       | false      |
| pos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| state | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

