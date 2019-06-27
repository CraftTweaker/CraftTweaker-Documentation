# IItemUpdate

The IItemUpdateFunction can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) to allow code to be executed whenever the item updates.

## Importing the package

If you ever feel the need to import this function's class, here you go:

    import mods.contenttweaker.IItemUpdate;
    

## Syntax

We have a void function that takes the following parameters (in order)

- An [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) representing the item stack itself.
- An [IWorld object](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) representing the world the action takes place in.
- An [IEntity object](/Vanilla/Entities/IEntity/) downcast as far as possible, so you can instanceOf up until [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).
- An int representing the slot the item currently is in
- A boolean stating whether or not the item is currently selected.

    item.onItemUpdate = function(itemStack, world, owner, slot, isSelected) {
        //CODE GOES HERE!!
        return;
    }