# IItemInteractionForEntity

The IItemInteractionForEntity function can be added to an [Item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will be triggered when a player right clicks on an entity with the item.

NOTE: This class will not exist until a ContentTweaker 1.12 version newer than 4.10.0 is built and released. For now, this file is kept for archival purposes, and this notice will be removed when ContentTweaker 1.12 is updated.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemInteractionForEntity;` 


## Parameters
The IItemInteractionForEntity function is a function with the following parameters:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → The item that was used
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) player → The player using the item
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) target → The entity the item was used on
- String hand → Either "OFF_HAND" or "MAIN_HAND"

The function needs to return either `true` or `false`


## Example
```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemInteractionForEntity;
import crafttweaker.entity.IEntityLivingBase;

var sheep_remover = VanillaFactory.createItem("sheep_remover");
sheep_remover.itemInteractionForEntity = function(stack, player, target, hand) {
    if target.definition.id == "minecraft:sheep" {
        target.removeFromWorld();
        stack.shrink(1);
        return true;
    }
    return false;
};
sheep_remover.register();
```
