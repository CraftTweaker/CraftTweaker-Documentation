# Камера очистки

В соответствии с Меканизмом 9.7.0 теперь можно просматривать все рецептные строки Камеры очистки через команду `/ct mekrecipes`

## Сложение

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

По данным Меканизма 9.7.0 впускГаз больше не ограничивается только кислородом

Также как и Mekanism 9.7.0, можно использовать IIngredients в качестве itemInput вместо IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional Igredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

Меканизм 9.7.0 теперь можно удалить все рецепты Палаты Очистки. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.purification.removeAllRecipes();
```