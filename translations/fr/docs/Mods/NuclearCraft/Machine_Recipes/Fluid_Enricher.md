# Enrichissement du fluide

## Importation du paquet en cours
`mods.nuclearcraft.dissolver`

## Ajout de recettes
```zenscript
mods.nuclearcraft.dissolver.addRecipe([itemInput, fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.dissolver.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.dissolver.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.dissolver.removeAllRecipes();
```