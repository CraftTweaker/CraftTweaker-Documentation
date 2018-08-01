# IItemRightClick

The IItemRightClick function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will be triggered when a user does rightclick with the item selected in his primary hand.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemRightClick;` 


## Parameters
The IItemRightClickFunction is a function with the following parameters:

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → The item that is right-clicked
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world the player is in
- [IPlayer](/Vanilla/Players/IPlayer/) player → The player doing the right-click
- String hand → Either "OFF_HAND" or "MAIN_HAND"

The function needs to return either `"SUCCESS"`, `"PASS"` or `"FAIL"`


## Example
```
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```