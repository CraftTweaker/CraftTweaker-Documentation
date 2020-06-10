# IMetaTileEntity

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.IMetaTileEntity;
```
## Information
A GregTech meta tile entity.

 * **See also:** MetaTileEntities

## ZenMethods

### Static Methods
#### IMetaTileEntity#byId(string)
-> IMetaTileEntity

Get a meta tile entity by its ID.

 * **Parameters:** `id` — The ID of the meta tile entity.
 * **Returns:** The meta tile entity referenced by the ID, or null.

### Instance Methods
#### IMetaTileEntity#getWorld()
-> IWorld

 * **Returns:** The world the meta tile entity is in.

#### IMetaTileEntity#getPos()
-> IBlockPos

 * **Returns:** The position the meta tile entity is in.

#### IMetaTileEntity#getTimer()
-> long

 * **Returns:** How long the meta tile entity has been in the world for.

#### IMetaTileEntity#getMetaName()
-> string

 * **Returns:** The unlocalized name of the machine, excluding `.name` at the end.

#### IMetaTileEntity#getMetaFullName()
-> string

 * **Returns:** The unlocalized name of the machine, including `.name` at the end.

#### IMetaTileEntity#getFrontFacing()
-> IFacing

 * **Returns:** The direction the meta tile entity is facing.
