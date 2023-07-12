# PistonEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.block.piston.PistonEvent;
```


## Extending BlockEvent

PistonEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in PistonEvent

## Properties

|      Name       |                                        Type                                        | Has Getter | Has Setter |                                                                                             Description                                                                                             |
|-----------------|------------------------------------------------------------------------------------|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| direction       | [Direction](/vanilla/api/util/direction/Direction)                                 | true       | false      | Gets the direction that the piston is facing.                                                                                                                                                       |
| faceOffsetPos   | [BlockPos](/vanilla/api/util/math/BlockPos)                                        | true       | false      | Gets the position that the piston is facing towards.                                                                                                                                                |
| level           | [Level](/vanilla/api/world/Level)                                                  | true       | false      |                                                                                                                                                                                                     |
| pistonMoveType  | [PistonMoveType](/forge/api/event/block/piston/PistonMoveType)                     | true       | false      | Gets the move type of the piston (is it extending or retracting).                                                                                                                                   |
| structureHelper | [PistonStructureResolver](/vanilla/api/block/type/piston/PistonStructureResolver)? | true       | false      | Gets a **nullable** structure resolver that can be used to get all the blocks that will be affected by the piston. <br />  <br />  Be sure to call the `resolve()` method on the structure resolver |

