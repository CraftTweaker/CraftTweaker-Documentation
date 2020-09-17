# Химический Окисление

Начиная с 9.7.0 меканизма теперь можно просматривать все рецептные строки Химического Оксидезера через команду `/ct мекрецептов окисления`

## Сложение

```zenscript
mods.mekanism.chemical.oxidizer.addRecipe(IIngredient inputStack, IGasStack);

mods.mekanism.chemical.oxidizer.addRecipe(<mekanism:dust:2>, <gas:cleanOsmium>);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.chemical.oxidizer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.oxidizer.removeRecipe(<gas:brine>, <mekanism:salt>);
mods.mekanism.chemical.oxidizer.removeRecipe(<gas:lithium>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все рецепты Химического Оксидезера. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.chemical.oxidizer.removeAllRecipes();
```