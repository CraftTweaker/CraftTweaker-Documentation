# Precision Sawmill

В соответствии с Меканизмом 9.7.0 теперь можно просматривать все рецептные нити точной лесопилки через команду `/ct mekrecipes`

## Сложение

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack, @Optional IItemStack bonusOutput, @Optional double bonusChance);

mods. ekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);

mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
```

Указание выходного параметра только удалит конкретный рецепт, который приводит к этому выводу. Пропуск выходного параметра удалит все рецепты, которые может генерировать входной элемент.

## Удаление всех рецептов

Меканизм 9.7.0 позволяет удалить все рецепты точной мельницы. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.sawmill.removeAllRecipes();
```