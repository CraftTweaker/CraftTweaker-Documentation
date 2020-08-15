# Enricher fluido

## Importando el Paquete
`mods.nuclearcraft.dissolver`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.dissolver.addRecipe([itemInput, fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.dissolver.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.dissolver.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.dissolver.removeAllRecipes();
```