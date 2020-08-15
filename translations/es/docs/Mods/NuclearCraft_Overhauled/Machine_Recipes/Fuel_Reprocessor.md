# Fuel Reprocessor

## Importing the Package
`mods.nuclearcraft.FuelReprocessorFuelReprocessor`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient temOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();
```