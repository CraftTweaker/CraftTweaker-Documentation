# Manufactory

## Importing the Package
`mods.nuclearcraft.Manufactory`

## Adding Recipes
```zenscript
mods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Manufactory.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();
```