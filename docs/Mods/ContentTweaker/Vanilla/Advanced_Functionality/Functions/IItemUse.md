# IItemUse Function
An itemUseFunction is called whenever the associated [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) is used on a block.


## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemUse;` 


## Parameters
The IItemUse function is a function with the following parameters (In this order):

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) player → The player doing the right-click
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world the player is in
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → The Position of the block the item is used on
- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) hand → The used Hand (main or off)
- [Facing](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) facing → The side of the block the item is used on
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → The block's relative X,Y and Z coordinate → All three are between 0 and 1

The function needs to return an [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/) object.

## Example
```JAVA
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

item.maxStackSize = 1;
item.maxDamage = 50;
item.onItemUse = function(player, world, pos, hand, facing, blockHit) {
    var firePos = pos.getOffset(facing, 1);
    if (world.getBlockState(firePos).isReplaceable(world, firePos)) {
        world.setBlockState(<block:minecraft:fire>, firePos);
        player.getHeldItem(hand).damage(1, player);
        return ActionResult.success();
    }

    return ActionResult.pass();
};
item.register();
```
