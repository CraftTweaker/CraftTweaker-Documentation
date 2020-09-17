# Металлургический сплав

## Импортирование пакета
`mods.techreborn.alloyPlelter`

## Добавление рецептов
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient ingredientB);
mods.techreborn.alloySmelter.removeRecipe(выход IItemStack);
mods.techreborn.alloySmelter.removeAll();
```