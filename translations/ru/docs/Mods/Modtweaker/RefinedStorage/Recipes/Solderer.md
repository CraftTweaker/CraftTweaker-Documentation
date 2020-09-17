# Солдат

Пакет Солдаты используется для добавления или удаления рецептов в или из Затопленного Солдата.

## Звонок

Вы можете вызвать пакет Solderer используя `mods.refinedstorage.Solderer`

## Добавление рецепта

The Rows array **must** have a length of three! Используйте `null` , если вам нужны пустые стеки.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(IItemStack, int time, IItemStack[] строк);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Удаление рецепта

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(выход IItemStack);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```