# Chemical Crystallizer

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Chemical Crystallizer through the command `/ct mekrecipes crystallizer`

## Addition

    mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack outputStack);
    
    mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
    

## Removal

    mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas);
    
    mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
    mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
    

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Chemical Crystallizer recipes. (This excludes any recipes added via CraftTweaker)

    mods.mekanism.chemical.crystallizer.removeAllRecipes();