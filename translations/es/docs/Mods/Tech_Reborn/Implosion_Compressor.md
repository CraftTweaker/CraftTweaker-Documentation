# Implosión del compresor

## Importando el Paquete
`mods.techreborn.implosionCompressor`

## Añadiendo recetas
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, ItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.implosionCompressor.removeRecipe(IItemStack output);
mods.techreborn.implosionCompressor.removeAll();
```