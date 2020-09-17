# Ecraseur de Roche

## Importation du paquet en cours
`format@@0 mods.nuclearcraft.rock_crusher`

## Ajout de recettes
```zenscript
mods.nuclearcraft.rock_crusher.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.rock_crusher.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.rock_crusher.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3]);
mods.nuclearcraft.rock_crusher.removeAllRecipes();
```