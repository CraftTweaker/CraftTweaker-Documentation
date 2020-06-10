# IBlockInfo

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.IBlockInfo;
```
## Information
This is used to define what block should show in the JEI preview.

It is used in [`FactoryMultiblockShapeInfo#where(string, IBlockInfo)`](docs/Mods/MultiblockTweaker/multiblocktweaker/crafttweaker/construction/FactoryMultiblockShapeInfo.md#factorymultiblockshapeinfowherestring-iblockinfo).

 * **See also:**
   * FactoryMultiblockShapeInfo
   * IMultiblockShapeInfo

## ZenMethods

### Static Methods
#### IBlockInfo#fromBlock(IBlock)
-> IBlockInfo

Get an [`IBlockInfo`](#IBlockInfo) from a block.

Equivalent to `block as IBlockInfo`.

 * **Parameters:** `block` — The block to display.
 * **Returns:** An [`IBlockInfo`](#IBlockInfo) that represents the given block.

#### IBlockInfo#fromState(IBlockState)
-> IBlockInfo

Get an [`IBlockInfo`](#IBlockInfo) from a block state.

Equivalent to `state as IBlockInfo`.

 * **Parameters:** `state` — The block state to display.
 * **Returns:** An [`IBlockInfo`](#IBlockInfo) that represents the given block.

#### IBlockInfo#controller(string, IFacing)
-> IBlockInfo

Get an [`IBlockInfo`](#IBlockInfo) from a controller's string ID.

 * **Parameters:**
   * `id` — The id of the meta tile entity to display.
   * `facing` — (Optional) The direction this should face. `IFacing.west()` by default.
 * **Returns:** An [`IBlockInfo`](#IBlockInfo) that represents the given block.

## ZenGetters/ZenSetters
| ZenGetter | ZenSetter | Type |
| --- | --- | --- |
| EMPTY | EMPTY | [IBlockInfo](IBlockInfo.md) |
