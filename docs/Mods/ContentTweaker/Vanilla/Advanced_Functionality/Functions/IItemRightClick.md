# IItemRightClick

The IItemRightClick function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item) and will be triggered when a user does rightclick with the item selected in his primary hand.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemRightClick;` 


## Parameters
The IItemRightClickFunction is a function with the following parameters:

- IItemStack itemStack → The [item](/Vanilla/Items/IItemStack) that is right-clicked
- IWorld world → The world the player is in
- IPlayer player → The [player](/Vanilla/Game/IPlayer) doing the right-click
- String hand → ?

The function needs to return a string!


## Example
```
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```