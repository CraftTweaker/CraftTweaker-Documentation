# Compresor

## Importando el Paquete
`mods.techreborn.compressor`

## Añadiendo recetas
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, IIngredient input1, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.compressor.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.compressor.removeRecipe(IItemStack output);
mods.techreborn.compressor.removeAll();
```