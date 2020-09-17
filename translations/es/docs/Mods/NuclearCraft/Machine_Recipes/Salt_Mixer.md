# Mezclador de sal

## Importando el Paquete
`mods.nuclearcraft.salt_mixer`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.salt_mixer.addRecipe([fluidInput1, fluidInput2, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.salt_mixer.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.salt_mixer.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_mixer.removeAllRecipes();
```