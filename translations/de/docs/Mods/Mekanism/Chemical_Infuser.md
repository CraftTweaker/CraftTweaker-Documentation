# Chemical Infuser

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Chemical Infuser through the command `/ct mekrecipes chemicalInfuser`

## Addition

    mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);
    
    mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
    

## Removal

    mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);
    
    mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
    mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
    

Specifying an input parameter will only remove the specific recipe that uses said input. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Chemical Infuser recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

    mods.mekanism.chemical.infuser.removeAllRecipes();