# Chemical Oxidizer

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Chemical Oxidizer through the command `/ct mekrecipes oxidizer`

## Addition

    mods.mekanism.chemical.oxidizer.addRecipe(IIngredient inputStack, IGasStack outputGas);
    
    mods.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
    

As of Mekanism 9.7.0 it is possible to use IIngredients as the inputStack instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

## Removal

    mods.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);
    
    mods.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
    mods.mekanism.chemical.oxidizer.removeRecipe(<gas:lithium>);
    

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Chemical Oxidizer recipes. (This excludes any recipes added via CraftTweaker)

    mods.mekanism.chemical.oxidizer.removeAllRecipes();