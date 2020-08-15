# Centrifuge

## Importando el Paquete
`mods.nuclearcraft.centrifuge`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.centrifuge.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4 , @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.centrifuge.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.centrifuge.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.centrifuge.removeAllRecipes();
```