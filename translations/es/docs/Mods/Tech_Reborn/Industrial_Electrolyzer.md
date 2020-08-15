# Electrolizador industrial

## Importando el Paquete
`mods.techreborn.industrialElectrolyzer`

## Añadiendo recetas
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(ItemStack output1, ItemStack output2, ItemStack output3, IItemStack output4, IIItemStack output4, IIngredient cells, IIngredient input2, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(ingrediente IIngrediente);
mods.techreborn.industrialElectrolyzer.removeRecipe(salida ItemStack);
mods.techreborn.industrialElectrolyzer.removeAll();
```