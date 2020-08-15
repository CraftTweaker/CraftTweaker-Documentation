# Manufactory

## Importing the Package
`mods.nuclearcraft.Manufactory`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Manufactory.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();
```