# Fission

## Importation du paquet en cours
`mods.nuclearcraft.fission`

## Ajout de recettes
```zenscript
mods.nuclearcraft.fission.addRecipe([itemInput, itemOutput, double baseTime, double basePower, double baseHeat, String guiName, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.fission.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fission.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.fission.removeAllRecipes();
```