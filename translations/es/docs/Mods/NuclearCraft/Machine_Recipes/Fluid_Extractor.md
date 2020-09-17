# Extractor de fluidos

## Importando el Paquete
`extractor mods.nuclearcraft.`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.extractor.addRecipe([itemInput, itemOutput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.extractor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.extractor.removeRecipeWithOutput([itemOutput, fluidOutput]);
mods.nuclearcraft.extractor.removeAllRecipes();
```