# Triturador de roca

## Importando el Paquete
`mods.nuclearcraft.rock_triturador`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.rock_crusher.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.rock_crusher.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.rock_crusher.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3]);
mods.nuclearcraft.rock_crusher.removeAllRecipes();
```