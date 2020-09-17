# Superenfriador

## Importando el Paquete
`mods.nuclearcraft.superenfriador`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.supercooler.addRecipe([fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.supercooler.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.supercooler.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.supercooler.removeAllRecipes();
```