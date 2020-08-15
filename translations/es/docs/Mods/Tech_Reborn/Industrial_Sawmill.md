# Aserradero industrial

## Importando el Paquete
`mods.techreborn.aserradero industrial`

## Añadiendo recetas
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, ItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int euTick);
mods. echreborn.industrialSawmill.addRecipe(IItemStack output1, ItemStack output2, ItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn. ndustrialSawmill.addRecipe(ItemStack output1, ItemStack output2, ItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn. ndustrialSawmill.addRecipe(ItemStack output1, IItemStack output2, ItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick, boolean useOreDic);
```

## Eliminando recetas
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.industrialSawmill.removeRecipe(salida ItemStack);
mods.techreborn.industrialSawmill.removeAll();
```