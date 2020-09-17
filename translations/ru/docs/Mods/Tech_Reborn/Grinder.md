# Мельница

## Импортирование пакета
`mods.techreborn.grinder`

## Добавление рецептов
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack, IIngredient input1, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.grinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.grinder.removeRecipe(выход IItemStack);
mods.techreborn.grinder.removeAll();
```