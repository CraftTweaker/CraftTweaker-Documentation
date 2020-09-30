# Fission

## Importing the Package
`mods.nuclearcraft.fission`

## Adding Recipes
```zenscript
mods.nuclearcraft.fission.addRecipe([itemInput, itemOutput, double baseTime, double basePower, double baseHeat, String guiName, @Optional double processRadiation]);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.fission.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fission.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.fission.removeAllRecipes();
```