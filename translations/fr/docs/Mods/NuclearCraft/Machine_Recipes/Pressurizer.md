# Pressuriseur

## Importation du paquet en cours
`mods.nuclearcraft.pressurizer`

## Ajout de recettes
```zenscript
mods.nuclearcraft.pressurizer.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.pressurizer.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.pressurizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.pressurizer.removeAllRecipes();
```