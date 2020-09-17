# Слиятельный Реактор

## Импортирование пакета
`mods.techreborn.fusionReactor`

## Добавление рецептов
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IIngredient bottomInput, IItemStack, int startEU, int euTick, int tickTime);
```

## Удаление рецептов
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(IItemStack);
mods.techreborn.fusionReactor.removeAll();
```