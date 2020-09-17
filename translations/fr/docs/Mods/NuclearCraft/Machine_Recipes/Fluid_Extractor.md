# Extracteur de liquide

## Importation du paquet en cours
`extractor`

## Ajout de recettes
```zenscript
mods.nuclearcraft.extractor.addRecipe([itemInput, itemOutput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.extractor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.extractor.removeRecipeWithOutput([itemOutput, fluidOutput]);
mods.nuclearcraft.extractor.removeAllRecipes();
```