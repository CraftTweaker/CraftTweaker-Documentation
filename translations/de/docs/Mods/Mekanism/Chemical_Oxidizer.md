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
    

Specifying an input parameter will only remove the specific recipe that uses said input. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Chemical Oxidizer recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

    mods.mekanism.chemical.oxidizer.removeAllRecipes();