# Вакуумный морозильник

## Импортирование пакета
`mods.techreborn.vacuumFreezer`

## Добавление рецептов
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(IItemStack, IIngredient input, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack);
mods.techreborn.vacuumFreezer.removeAll();
```