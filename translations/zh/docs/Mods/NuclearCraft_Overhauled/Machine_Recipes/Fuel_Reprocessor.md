# Fuel Reprocessor

## Importing the Package
`mods.nuclearcraft.FuelReprocessor`

## Adding Recipes
```zenscript
mods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4, IIngredient itemOutput5, IIngredient itemOutput6, IIngredient itemOutput7, IIngredient itemOutput8, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4, IIngredient itemOutput5, IIngredient itemOutput6, IIngredient itemOutput7, IIngredient itemOutput8, IIngredient temOutput6);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();
```