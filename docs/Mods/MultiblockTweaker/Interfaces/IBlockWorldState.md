# IBlockWorldState

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.IBlockWorldState;
```
## Information
Similar to an [`IBlockState`](../../../Vanilla/Blocks/IBlockState.md), but bound to a position and world, and holding extra information about the match taking place.

## ZenMethods

### Instance Methods
#### IBlockWorldState#getOffsetState(IFacing)
-> IBlockState

 * **Returns:** The block state at the position offset from this.

## ZenGetters/ZenSetters
| ZenGetter | ZenSetter | Type |
| --- | --- | --- |
| layerContext |   | [IPatternMatchContext](/IPatternMatchContext.md) |
| matchContext |   | [IPatternMatchContext](/IPatternMatchContext.md) |
| state |   | [IBlockState](../../../Vanilla/Blocks/IBlockState.md) |
| pos |   | IBlockPos |
| world |   | IWorld |
