# Fuel Reprocessor

## Importing the Package
`mods.nuclearcraft.fuel_reprocessor`

## Adding Recipes
```zenscript
mods.nuclearcraft.fuel_reprocessor.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, itemOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.fuel_reprocessor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fuel_reprocessor.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3, itemOutput4]);
mods.nuclearcraft.fuel_reprocessor.removeAllRecipes();
```