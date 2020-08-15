# Экстрактор

## Импортирование пакета
`mods.techreborn.extractor`

## Добавление рецептов
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack, IIngredient input1, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.extractor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.extractor.removeRecipe(выход IItemStack);
mods.techreborn.extractor.removeAll();
```