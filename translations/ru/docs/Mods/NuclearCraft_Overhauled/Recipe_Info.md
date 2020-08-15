# Информация о рецепте

## Обработчики рецептов
Если вы хотите получить обработчик рецепта, связанный с типом рецепта, используйте `getRecipeHandler()`. Например, если вы хотите получить ручку с рецептом Топливного действия, используйте `mods.nuclearcraft.SolidFission.getRecipeHandler()`.

## Методы обработчика рецептов
```zenscript
RecipeHandler::getRecipeName();
Обработчик рецепта::getRecipeList();

Обработчик рецепта: :getItemInputSize();
Обработчик рецепта::getFluidInputSize();
Обработчик рецепта:getItemOutputSize();
Обработчик рецепта::getFluidOutputSize();
Обработчик рецепта:::isShapeless();
```

## Методы рецепта
```zenscript
Рецепт::getItemIngredient(int index);
Рецепт::getFluidIngredient(int index);
Рецепт::getItemProduct(int index);
Рецепт::getFluidProduct(int index);
```