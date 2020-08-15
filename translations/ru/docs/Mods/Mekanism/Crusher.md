# Дробитель

Начиная с 9.7.0 меканизма теперь можно просмотреть все рецептные строки дробилки через команду `/ct mekrecipes дробитель`

## Сложение

```zenscript
mods.mekanism.crusher.addRecipe(IIngredient inputStack, IItemStack);

mods.mekanism.crusher.addRecipe(<minecraft:double_plant:4>, <minecraft:dye:1> * 5);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.crusher.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack);

mods.mekanism.crusher.removeRecipe(<minecraft:sand>, <minecraft:gravel>);
mods.mekanism.crusher.removeRecipe(<minecraft:gravel>
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все крепежные рецепты. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.crusher.removeAllRecipes();
```