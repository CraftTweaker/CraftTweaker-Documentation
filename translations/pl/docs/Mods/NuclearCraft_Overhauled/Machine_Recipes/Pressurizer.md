# Pressurizer

## Importing the Package
`mods.nuclearcraft.Pressurizer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Pressurizer.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Pressurizer.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Pressurizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Pressurizer.removeAllRecipes();
```