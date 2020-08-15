# Дистилляционная башня

## Импортирование пакета
`mods.techreborn.distillationTower`

## Добавление рецептов
```zenscript
mods.techreborn.distillationTower.addRecipe(IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.distillationTower.removeInputRecipe(IIngredient ingredient);
mods.techreborn.distillationTower.removeRecipe(выход IItemStack);
mods.techreborn.distillationTower.removeAll();
```