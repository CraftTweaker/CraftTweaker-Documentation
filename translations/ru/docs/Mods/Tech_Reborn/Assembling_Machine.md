# Сборочный автомат

## Импортирование пакета
`mods.techreborn.assemblingMachine`

## Добавление рецептов
```zenscript
mods.techreborn.assemblingMachine.addRecipe(IItemStack, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.assemblingMachine.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.assemblingMachine.removeRecipe(выход IItemStack);
mods.techreborn.assemblingMachine.removeAll();
```