# Drying

The `Drying` package allows you to add or remove Drying recipes.

## Calling

You can call the Drying package using `mods.tconstruct.Drying`

## Adding

The time is in ticks

    //mods.tconstruct.Drying.addRecipe(IItemStack output, IIngredient input, int time);
    mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
    

## Removing

    //mods.tconstruct.Drying.removeRecipe(IItemStack output);
    mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);
    
    //mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
    mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);