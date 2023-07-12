# FluidPlaceBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.block.fluid.FluidPlaceBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.block.fluid.FluidPlaceBlockEvent>(event => {
    println("FluidPlaceBlockEvent ran!");
});
```


## Supertype

FluidPlaceBlockEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in FluidPlaceBlockEvent

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| liquidPos     | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| newState      | [BlockState](/vanilla/api/block/BlockState) | true       | true       |
| originalState | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

