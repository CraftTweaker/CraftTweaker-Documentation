# Комбинер

Начиная с 9.7.0 меканизма появилась возможность просматривать все рецептные строки комбинатора через команду `/ct mekrecipes`

## Сложение

```zenscript
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>
```

В версии 9.7.0 можно использовать IIngredients в качестве элемента Ingredients вместо того, чтобы использовать только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient extraInputStack, @Optional IIngredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

В соответствии с Меканизмом 9.7.0 появилась возможность удалить все рецепты комбинации. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.combiner.removeAllRecipes();
```