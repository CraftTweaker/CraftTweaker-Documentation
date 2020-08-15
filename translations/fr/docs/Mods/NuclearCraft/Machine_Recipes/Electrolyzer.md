# Électrolyseur

## Importation du paquet en cours
`mods.nuclearcraft.electrolyzer`

## Ajout de recettes
```zenscript
mods.nuclearcraft.electrolyser.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.electrolyser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.electrolyser.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.electrolyser.removeAllRecipes();
```