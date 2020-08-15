# Manufactory

## Importing the Package
`mods.nuclearcraft.ManufactoryManufactory`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Manufactory.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();
```