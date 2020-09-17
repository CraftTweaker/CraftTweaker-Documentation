# Центрифуга

ModTweaker позволяет добавлять или удалять Рецепты Лесного Центрифуга

## Звонок

Вы можете вызвать пакет с помощью `mods.forestry.Centrifuge`

## Удаление рецепта

```zenscript
//mods.forestry.Centri<unk> .removeRecipe(IIngredient input);
mods.forestry.Centri<unk> .removeRecipe(<forestry:bee_combs:*>);

```

## Прибавление Reipe

```zenscript
//mods.forestry.Centri<unk> .addRecipe(WeightedItemStack[] вывод, ингредиенты IItemStack, int packagingTime);
mods.forestry.Centri<unk> .addRecipe([<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```