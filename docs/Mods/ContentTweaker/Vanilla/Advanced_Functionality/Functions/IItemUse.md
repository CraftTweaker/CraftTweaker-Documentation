# IItemUse Function (NYI)
An itemUseFunction is called whenever the associated [item](/mods/ContentTweaker/Vanilla/Creatable_Content/Item) is used on a block.


## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemUse;` 


## Parameters
The IItemRightClickFunction is a function with the following parameters (In this order):

- [IPlayer](/Vanilla/Game/IPlayer) player → The player doing the right-click
- [IWorld](/Mods/Contenttweaker/Vanilla/Types/World/IWorld) world → The world the player is in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos) pos → The Position of the block the item is used on
- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand) hand → The used Hand (main or off)
- [Facing](/Mods/ContentTweaker/Vanilla/Types/Block/Facing) facing → The side of the block the item is used on
- float hitX → The block's relative X coordinate → Always between 0 and 1
- float hitY → The block's relative Y coordinate → Always between 0 and 1
- float hitZ → The block's relative Z coordinate → Always between 0 and 1

The function needs to return an [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/ActionResult) object.