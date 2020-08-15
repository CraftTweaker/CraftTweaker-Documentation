# Промышленная мельница

## Импортирование пакета
`mods.techreborn.industrialGrinder`

## Добавление рецептов
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
mods. echreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, Igredient input1, IIngredient input2, ILiquidStack fluid, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialGrinder.removeRecipe(IItemStack);
mods.techreborn.industrialGrinder.removeAll();
```