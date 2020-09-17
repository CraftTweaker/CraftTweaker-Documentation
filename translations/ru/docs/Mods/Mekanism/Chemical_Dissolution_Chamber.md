# Камера по химическому раствору

По состоянию на Меканизм 9.7. добавлена возможность просматривать все рецептные строки камеры Химраствора через команду `/ct mekrecipes распыления`

## Сложение

```zenscript
mods.mekanism.chemical.dissolution.addRecipe(IIngredient inputStack, IGasStack);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:tin>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

Начиная с 9.7.0 меканизма появилась возможность удалить все рецепты Палаты Химраствора. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.chemical.dissolution.removeAllRecipes();
```