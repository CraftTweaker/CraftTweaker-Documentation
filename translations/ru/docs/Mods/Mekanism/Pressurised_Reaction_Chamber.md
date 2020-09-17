# Сжатая палата реакции

По состоянию на Меканизм 9.7. добавлена возможность просматривать все рецептные строки камеры давлённой реакции через команду `/ct mekrecipes prc`

## Сложение

```zenscript
mods.mekanism.reaction.addRecipe(IIngredient itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, двойная энергия, внутренняя продолжительность);

модов. ekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

Для Mekanism 9.7.0 можно использовать IIngredients в качестве itemInput вместо IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasput, @Optional IIngredient itemInput, @Optional IIngredient liquidInput, @Optional IIngredient gasInput);

mods. ekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

Указанный входной параметр удалит только тот рецепт, который использует указанный ввод. Пропуск входного параметра удалит все рецепты, которые производят указанный выход.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все рецепты Палаты Сжатой Реакции. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.reaction.removeAllRecipes();
```