# Тепловое испарение

В соответствии с Меканизмом 9.7.0 теперь можно просматривать все рецептные строки термального испарения через команду `/ct mekrecipes термоиспарения`

## Сложение

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## Удаление

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>
```

Указание выходного параметра только удалит конкретный рецепт, который приводит к этому выводу. Пропуск выходного параметра удалит все рецепты, которые может генерировать входной элемент.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все рецепты Термального завода по испарению. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.thermalevaporation.removeAllRecipes();
```