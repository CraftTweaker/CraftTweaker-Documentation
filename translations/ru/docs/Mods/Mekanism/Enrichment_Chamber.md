# Патронник обогащения

Начиная с 9.7.0 меканизма теперь можно просматривать все рецептные строки Камеры обогащения через команду `/ct mekrecipes обогащения`

## Сложение

```zenscript
mods.mekanism.enrichment.addRecipe(IIngredient inputStack, IItemStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

В соответствии с Mekanism 9.7.0 можно использовать IIngredients как inputStack, а не только IItemStacks.

Замечание: В настоящее время все это повторяет различные возможности в java при добавлении вместо того, чтобы делать это в ZenScript. В настоящее время в машинах нет встроенной поддержки комбинированных ингредиентов или oredictionary .

## Удаление

```zenscript
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```

Указание выходного параметра только удалит конкретный рецепт, который приводит к этому выводу. Пропуск выходного параметра удалит все рецепты, которые может генерировать входной элемент.

## Удаление всех рецептов

По данным Меканизма 9.7.0, теперь можно удалить все рецепты Камеры обогащения. (Это исключает любые рецепты, добавленные через CraftTweaker)

```zenscript
mods.mekanism.enrichment.removeAllRecipes();
```