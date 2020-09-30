# Fuel Reprocessor

## Importing the Package
`mods.nuclearcraft.FuelReprocessor`

## Adding Recipes
```zenscript
mods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient temOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();
```