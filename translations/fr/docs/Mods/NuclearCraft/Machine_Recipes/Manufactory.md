# Fabrication

## Importation du paquet en cours
`mods.nuclearcraft.manufacture`

## Ajout de recettes
```zenscript
mods.nuclearcraft.manufactory.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.manufactory.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.manufactory.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.manufactory.removeAllRecipes();
```