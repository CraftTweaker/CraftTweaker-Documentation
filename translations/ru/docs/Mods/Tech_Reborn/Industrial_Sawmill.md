# Промышленная лесопилка

## Импортирование пакета
`mods.techreborn.industrialSawmill`

## Добавление рецептов
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick);
модов. echreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick, boolean useOreDic);
```

## Удаление рецептов
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialSawmill.removeRecipe(выход IItemStack);
mods.techreborn.industrialSawmill.removeAll();
```