# Melter

## Importing the Package
`mods.nuclearcraft.MelterMelter`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Melter.addRecipe(IIngredient itemInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerMelter.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.Melter.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Melter.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Melter.removeAllRecipes();Melter.removeAllRecipes();
```