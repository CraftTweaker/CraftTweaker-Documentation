# Supercooler

## Importation du paquet en cours
`mods.nuclearcraft.supercooler`

## Ajout de recettes
```zenscript
mods.nuclearcraft.supercooler.addRecipe([fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.supercooler.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.supercooler.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.supercooler.removeAllRecipes();
```