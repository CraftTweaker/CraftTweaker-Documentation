# Lingot ancien

## Importation du paquet en cours
`Mods nuclearcraft.ingot_former`

## Ajout de recettes
```zenscript
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.ingot_former.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```