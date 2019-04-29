# Purification Chamber

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Purification Chamber through the command `/ct mekrecipes purification`

## Addition

    mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);
    
    mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
    mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
    

As of Mekanism 9.7.0 inputGas is no longer restricted to only oxygen

Also as of Mekanism 9.7.0 it is possible to use IIngredients as the itemInput instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

## Removal

    mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional IIngredient gasInput);
    
    mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
    mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
    

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Purification Chamber recipes. (This excludes any recipes added via CraftTweaker)

    mods.mekanism.purification.removeAllRecipes();