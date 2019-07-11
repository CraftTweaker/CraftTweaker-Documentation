# Redstone Furnace

## Package

`mods.thermalexpansion.RedstoneFurnace`

## Addition

    //mods.thermalexpansion.RedstoneFurnace.addRecipe(IItemStack output, IItemStack input, int energy);
    mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
    

## Removal

    //mods.thermalexpansion.RedstoneFurnace.removeRecipe(IItemStack input);
    mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
    

## Pyrolitic Augment Addition

***Note that the energy is multiplied by `1.5`. If you specify `2000` energy, the recipe will actually cost `3000` RF. Likewise if you specify `1500`, it will case `2250` RF.***

Example recipe to turn charcoal into coal coke, producing 250mb of creosote oil in the process.

    //mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(IItemStack output, IItemStack input, int energy, int creosote);
    mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
    

## Pyrolitic Augment Removal

Removes the recipe to convert coal into coal coke.

    //mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(IItemStack input);
    mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);