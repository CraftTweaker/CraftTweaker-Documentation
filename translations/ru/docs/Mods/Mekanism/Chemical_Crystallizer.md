# Химический кристаллизатор

Начиная с 9.7.0 меканизма теперь можно просматривать все рецептные строки Chemical Crystallizer с помощью команды `/ct mekrecipes кристаллизатора`

## Сложение

```zenscript
mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack);

mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## Удаление

```zenscript
mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional Igredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все рецепты Химического Кристаллизера. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.chemical.crystallizer.removeAllRecipes();
```