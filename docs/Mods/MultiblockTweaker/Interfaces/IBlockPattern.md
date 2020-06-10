# IBlockPattern

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.IBlockPattern;
```
## Information
This is what defines the required structure of a multiblock

 * **See also:** FactoryBlockPattern

## ZenMethods

### Instance Methods
#### IBlockPattern#checkPatternAt(IWorld, IBlockPos, IFacing)
-> IPatternMatchContext

Check whether the pattern matches a structure.

Returns `null` if there is no match found.

 * **Parameters:**
   * `world` — The world to check in.
   * `centerPos` — The position of the controller.
   * `facing` — The direction to match in, opposite to the direction the controller is facing.
 * **Returns:** The context of the match, or null if there was none.

## ZenGetters/ZenSetters
| ZenGetter | ZenSetter | Type |
| --- | --- | --- |
| fingerLength |   | int |
| thumbLength |   | int |
| palmLength |   | int |
