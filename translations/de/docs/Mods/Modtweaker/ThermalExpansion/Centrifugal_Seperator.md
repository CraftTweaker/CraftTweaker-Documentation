# Centrifugal Seperator

## Package

`mods.thermalexpansion.Centrifuge`

## Addition

    //mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] outputs, IItemStack input, ILiquidStack fluid, int energy);
    mods.thermalexpansion.Centrifuge.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);
    
    

## Removal

    //mods.thermalexpansion.Centrifuge.removeRecipe(IItemStack input);
    mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);