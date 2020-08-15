# Isotope Separator

## Importing the Package
`mods.nuclearcraft.SeparatorSeparator`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Separator.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerSeparator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.Separator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Separator.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2);
mods.nuclearcraft.Separator.removeAllRecipes();Separator.removeAllRecipes();
```