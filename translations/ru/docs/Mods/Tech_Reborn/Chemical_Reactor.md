# Химический Реактор

## Импортирование пакета
`mods.techreborn.chemicalReactor`

## Добавление рецептов
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.chemicalReactor.removeRecipe(выход IItemStack);
mods.techreborn.chemicalReactor.removeAll();
```