# Infusor decadente

## Importando el Paquete
`mods.nuclearcraft.infuser`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.infuser.addRecipe([itemInput, fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.infuser.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.infuser.removeRecipeWithSalput([itemOutput]);
mods.nuclearcraft.infuser.removeAllRecipes();
```