# Индустриальный электролизер

## Импортирование пакета
`Электролизер mods.techreborn.industrialElectrolyzer`

## Добавление рецептов
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output3, IItemStack output4, IIngredient клеток, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialElectrolyzer.removeRecipe(выход IItemStack);
mods.techreborn.industrialElectrolyzer.removeAll();
```