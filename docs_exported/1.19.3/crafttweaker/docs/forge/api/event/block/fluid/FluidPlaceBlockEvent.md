# FluidPlaceBlockEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.block.fluid.FluidPlaceBlockEvent;
```


## Extending BlockEvent

FluidPlaceBlockEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in FluidPlaceBlockEvent

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| liquidPos     | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| newState      | [BlockState](/vanilla/api/block/BlockState) | true       | true       |
| originalState | [BlockState](/vanilla/api/block/BlockState) | true       | false      |

