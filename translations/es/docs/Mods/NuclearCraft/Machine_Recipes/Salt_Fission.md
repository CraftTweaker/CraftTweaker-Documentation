# Fission de la sal

## Importando el Paquete
`mods.nuclearcraft.salt_fisión`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.salt_fission.addRecipe([fluidInput, fluidOutput, double baseTime, double basePower, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.salt_fission.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.salt_fission.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.salt_fission.removeAllRecipes();
```