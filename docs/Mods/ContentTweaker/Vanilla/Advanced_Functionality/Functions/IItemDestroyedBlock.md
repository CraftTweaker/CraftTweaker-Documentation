# IItemDestroyedBlock

The IItemDestroyedBlock function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item) and will run whenever you try to break a block with the assiciated Item.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemDestroyedBlock;` 


## Parameters
The IItemDestroyedBlock is a function with the following parameters:

- [IItemStack](/Vanilla/Items/IItemStack) stack → The item.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld) world → The world this takes place in
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState) blockState → The state of the block that is being mined.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos) pos → Where does this take place?
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) entity → Who/What mines the block?

The Function needs to return a boolean, that is `true` if the blockBreaking process is successfull, and `false` if it ain't.