# Энергетический Металл

В соответствии с Меканизмом 9.7.0 теперь можно просматривать все рецептные струны Энергетированного Металла, используя команду `/ct мекрецептов`

## Сложение

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, IItemStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

Указание выходного параметра только удалит конкретный рецепт, который приводит к этому выводу. Пропуск выходного параметра удалит все рецепты, которые может генерировать входной элемент.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все энергетические рецепты Металлургического Завода. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.smelter.removeAllRecipes();
```