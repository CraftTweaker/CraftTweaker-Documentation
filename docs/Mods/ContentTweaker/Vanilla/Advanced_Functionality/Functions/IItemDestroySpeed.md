# IItemDestroySpeed

The IItemDestroySpeed function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item) and will determine the item's block breaking speed.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemDestroySpeed;` 


## Parameters
The IItemDestroySpeed is a function with the following parameters:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack) mutableItemStack → The item.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState) blockState → The state of the block that is being mined.