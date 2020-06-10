# FactoryMultiblockShapeInfo

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.FactoryMultiblockShapeInfo;
```
## Information
Used to create a design to show in JEI or as an in-world preview.

 * **See also:** IMultiblockShapeInfo

     <p>

     Used for [`Builder#addDesign(IMultiblockShapeInfo)`](Builder.md#builderadddesignimultiblockshapeinfo).

## ZenMethods

### Static Methods
#### FactoryMultiblockShapeInfo#start()
-> FactoryMultiblockShapeInfo

Start an empty builder.

Unlike [`FactoryMultiblockShapeInfo`](FactoryMultiblockShapeInfo.md), this cannot be rotated.

 * **Returns:** An empty builder.

### Instance Methods
#### FactoryMultiblockShapeInfo#aisle(string...)
-> FactoryMultiblockShapeInfo

Add a single aisle.

 * **Parameters:** `data` — The aisle pattern. Each unique character in any string must be defined in [`#where(string, IBlockInfo)`](#factorymultiblockshapeinfowherestring-iblockinfo) or its equivalents.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#aisleRepeated(int, string...)
-> FactoryMultiblockShapeInfo

Add a repeated aisle.

 * **Parameters:**
   * `count` — How many times to repeat the aisle.
   * `data` — The aisle pattern. Each unique character in any string must be defined in [`#where(string, IBlockInfo)`](#factorymultiblockshapeinfowherestring-iblockinfo) or its equivalents.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#where(string, IBlockInfo)
-> FactoryMultiblockShapeInfo

Define a symbol.

 * **Parameters:**
   * `symbol` — The character that will represent this value in [`#aisle(string...)`](#factorymultiblockshapeinfoaislestring).
   * `value` — The IBlockInfo to show in the preview.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#where(string, IBlock)
-> FactoryMultiblockShapeInfo

Define a symbol.

 * **Parameters:**
   * `symbol` — The character that will represent this value in [`#aisle(string...)`](#factorymultiblockshapeinfoaislestring).
   * `block` — The block to show in the preview.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#where(string, IItemStack)
-> FactoryMultiblockShapeInfo

Define a symbol.

 * **Parameters:**
   * `symbol` — The character that will represent this value in [`#aisle(string...)`](#factorymultiblockshapeinfoaislestring).
   * `stack` — The item whose block to show in the preview.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#where(string, IBlockState)
-> FactoryMultiblockShapeInfo

Define a symbol.

 * **Parameters:**
   * `symbol` — The character that will represent this value in [`#aisle(string...)`](#factorymultiblockshapeinfoaislestring).
   * `blockState` — The block state to show in the preview.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#where(string, IMetaTileEntity, IFacing)
-> FactoryMultiblockShapeInfo

Define a symbol.

 * **Parameters:**
   * `symbol` — The character that will represent this value in [`#aisle(string...)`](#factorymultiblockshapeinfoaislestring).
   * `te` — The machine tile entity to show in the preview.
   * `frontSide` — The side the tile entity is facing.
 * **Returns:** This builder, for convenience.

#### FactoryMultiblockShapeInfo#build()
-> IMultiblockShapeInfo

Create the [`IMultiblockShapeInfo`](../Interfaces/IMultiblockShapeInfo.md), for use in multiblock creation. Can be called multiple times.

 * **Returns:** The built [`IMultiblockShapeInfo`](../Interfaces/IMultiblockShapeInfo.md).
