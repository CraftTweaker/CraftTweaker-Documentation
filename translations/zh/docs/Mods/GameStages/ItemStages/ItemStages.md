# Item Stages

This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Item Stages allows access for items and blocks to be placed into a custom progression system set by the modpack creator. If a player does not have the required stage, the player will have trouble using the item. To learn more about how it does this, check out the mod page [here](https://minecraft.curseforge.com/projects/item-stages)

## Staging an Item

For an item to be restricted with this mod, it needs to be associated with a stage. This can be done in a few different ways.

    // Stages a single block or item. 
    mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);
    
    // Stages an item with partial NBT. For example this stage all LV 5 enchantment books.
    mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));
    
    // Stages all items with an ore dictionary tag.
    mods.ItemStages.addItemStage("stage_name", <ore:dye>);
    
    // Stages all items that are added by a specific mod.
    mods.ItemStages.stageModItems("stage_name", "modid");
    
    // Removes a stage from a specific item, useful when paired with stageModItems to reduce script size.
    mods.ItemStages.removeItemStage(<minecraft:stone>);
    

## Staging Liquids

You may want to stage liquids, this is primarily done to hide them in JEI.

    // Stages a single fluid, like water.
    mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
    

## Staging Enchantments

You can stage enchantments to prevent players from using items that have the enchantment on them.

    // Stages a specific enchantment. In this case protection.
    mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);
    
    // Stages a specific enchantment, at a specific level. In this case Protection II.
    mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
    

## Changing the Unfamiliar Item Name.

You may want to give your restricted items a new name while they are hidden. This can be used to add jokes and subtle lore to your pack.

    // Sets all wool to be named "Clump of Fur" for players who don't have the right stage.
    mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
    

## Staging a tooltip

You can stage parts of tooltips to hide information. This is especially useful when trying to stage mods like Project E which add an "EMC:" tooltip to most items.

    // Removes any line in a tooltip that starts with "EMC:"
    mods.ItemStages.stageTooltip("stage_name", "EMC:");
    

## Staging a Recipe Category

You can stage access to an entire recipe category with JEI. For example if you stage the furnace category and a player does not have the stage, they will not be able to see furnace recipes.

    // Stages a specific recipe category. In this example we are staging the anvil category.
    mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");