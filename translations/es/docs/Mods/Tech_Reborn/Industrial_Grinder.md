# Molino industrial

## Importando el Paquete
`mods.techreborn.industrialGrinder`

## Añadiendo recetas
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, ItemStack output2, ItemStack output3, ItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
mods. echreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, ItemStack output3, ItemStack output4, IIngredient input1, IIngredient input2, ILiquidStack fluid, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.industrialGrinder.removeRecipe(ItemStack output);
mods.techreborn.industrialGrinder.removeAll();
```