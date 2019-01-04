# Item Stages

This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Item Stages allows access for items and blocks to be placed into a custom progression system set by the modpack creator. If a player does not have the required stage, the player will have trouble using the item. To learn more about how it does this, check out the mod page [here](https://minecraft.curseforge.com/projects/item-stages)

## Restricting access to an item

    //mods.ItemStages.addItemStage(stage, IIngredient);
    mods.ItemStages.addItemStage("one", <minecraft:stone>);
    
    //Hides an item with partial NBT. For example this hides all LV 5 enchantment books.
    //Note: Partial NBT will not hide items in JEI. Those need to be done separately. (JEI limitation)
    mods.ItemStages.addItemStage("one", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));
    
    //Restricts access to all dyes in the ore dictionary.
    mods.ItemStages.addItemStage("one", <ore:dye>);
    

## Changing the name of item while hidden

    //mods.ItemStages.setUnfamiliarName(newName, IIngredient);
    mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
    

## Staging a liquid

    //mods.ItemStages.stageLiquid(stage, ILiquidStack);
    mods.ItemStages.stageLiquid("one", <liquid:water>);
    

## Staging a tooltip

    //Note: Lines that start with the striction are hidden. 
    //mods.ItemStages.stageTooltip(stage, restriction);
    mods.ItemStages.stageTooltip("one", "When");