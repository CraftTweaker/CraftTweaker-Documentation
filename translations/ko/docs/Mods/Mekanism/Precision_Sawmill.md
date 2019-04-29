# Precision Sawmill

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Precision Sawmill through the command `/ct mekrecipes sawmill`

## Addition

    mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack outputStack, @Optional IItemStack bonusOutput, @Optional double bonusChance);
    
    mods.mekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
    mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
    

As of Mekanism 9.7.0 it is possible to use IIngredients as the inputStack instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

## Removal

    mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);
    
    mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
    mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
    

Specifying an output parameter will only remove the specific recipe that results in that output from that input. Omitting the output parameter will remove all recipes that the input item can produce.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Precision Sawmill recipes. (This excludes any recipes added via CraftTweaker)

    mods.mekanism.sawmill.removeAllRecipes();