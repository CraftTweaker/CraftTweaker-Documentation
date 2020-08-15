# Horno de Aleación

## Importando el Paquete
`mods.nuclearcraft.alloy_horno`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.alloy_furnace.addRecipe([itemInput1, itemInput2, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.alloy_furnace.removeRecipeWithInput([itemInput1, itemInput2]);
mods.nuclearcraft.alloy_furnace.removeRecipeWithSalput([itemOutput1]);
mods.nuclearcraft.alloy_furnace.removeAllRecipes();
```