# Pressurizer

## Importing the Package
`mods.nuclearcraft.PressurizerPressurizer`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Pressurizer.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Pressurizer.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Pressurizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Pressurizer.removeAllRecipes();Pressurizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Pressurizer.removeAllRecipes();
```