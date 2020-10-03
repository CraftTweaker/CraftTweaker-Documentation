# Pressurizer

## Importing the Package
`mods.nuclearcraft.Pressurizer`

## Adding Recipes
```zenscript
mods.nuclearcraft.Pressurizer.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Pressurizer.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Pressurizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Pressurizer.removeAllRecipes();
```