# Smelting bonus

This package allows you to add and remove items to/from the Smelting bonus list.  
The Smelting Bonus list is queried whenever an infernal furnace cooks an item.

## Importing the package

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

    import mods.thaumcraft.SmeltingBonus;
    

## Adding items

Notice: Input needs to be either an IItemStack or an IOreDictEntry

    //mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient input, WeightedItemStack stack)
    mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
    

## Removing items

Notice: Input needs to be either an IItemStack or an IOreDictEntry

    //mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
    mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);