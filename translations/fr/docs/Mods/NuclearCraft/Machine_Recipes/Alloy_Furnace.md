# Four en Alliage

## Importation du paquet en cours
`Four allié`

## Ajout de recettes
```zenscript
mods.nuclearcraft.alloy_furnace.addRecipe([itemInput1, itemInput2, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.alloy_furnace.removeRecipeWithInput([itemInput1, itemInput2]);
mods.nuclearcraft.alloy_furnace.removeRecipeWithOutput([itemOutput1]);
mods.nuclearcraft.alloy_furnace.removeAllRecipes();
```