# Electrolizador

## Importando el Paquete
`mods.nuclearcraft.electrolyzer`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.electrolyser.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.electrolyser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.electrolyser.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.electrolyser.removeAllRecipes();
```