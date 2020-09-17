# Химическая Палата Инъекций

По состоянию на Меканизм 9.7. добавлена возможность просмотреть все рецептные строки Химической Чамки Инъекций через команду `/ct mekrecipes`

## Сложение

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack outputGas, IItemStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

По данным Меканизма, 9.7.0 впускГаз больше не ограничивается лишь серной кислотой, водой или хлоридом водорода

Также как Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional Igredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

Начиная с 9.7.0 меканизма появилась возможность удалить все рецепты Химической камеры инъекций. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.chemical.injection.removeAllRecipes();
```