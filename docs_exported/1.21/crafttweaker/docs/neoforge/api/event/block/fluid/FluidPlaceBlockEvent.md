# FluidPlaceBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.fluid.FluidPlaceBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.fluid.FluidPlaceBlockEvent>(event => {
    println("FluidPlaceBlockEvent ran!");
});
```


## Supertype

FluidPlaceBlockEvent extends [BlockEvent](/neoforge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/neoforge/api/event/block/BlockEvent) are also available in FluidPlaceBlockEvent

## Implemented Interfaces
FluidPlaceBlockEvent implements the following interfaces. That means all methods defined in these interfaces are also available in FluidPlaceBlockEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| liquidPos     | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| newState      | [BlockState](/vanilla/api/block/BlockState) | true       | true       |
| originalState | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

