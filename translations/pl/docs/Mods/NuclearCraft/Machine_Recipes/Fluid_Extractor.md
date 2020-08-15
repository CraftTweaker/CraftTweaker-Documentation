# Fluid Extractor

## Importing the Package
`mods.nuclearcraft.extractor`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.extractor.addRecipe([itemInput, itemOutput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.extractor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.extractor.removeRecipeWithOutput([itemOutput, fluidOutput]);
mods.nuclearcraft.extractor.removeAllRecipes();
```