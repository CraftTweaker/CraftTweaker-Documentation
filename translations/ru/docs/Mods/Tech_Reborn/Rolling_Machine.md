# Прокрутка машины

## Импортирование пакета
`mods.techreborn.rollingMachine`

## Добавление рецептов
```zenscript
mods.techreborn.rollingMachine.addShaped(IItemStack, IIngredient[][] ингредиенты);
mods.techreborn.rollingMachine.addShapeless(IItemStack, IIngredient[] ингредиенты);
```

## Удаление рецептов
```zenscript
mods.techreborn.rollingMachine.removeRecipe(выход IItemStack);
mods.techreborn.rollingMachine.removeAll();
```