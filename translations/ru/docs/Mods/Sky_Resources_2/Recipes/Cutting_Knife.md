# Режущий нож

Пакет *ножа* используется для добавления или удаления рецептов из Ножа резки.

## Звонок

Вы можете вызвать пакет *нож* с помощью `mods.skyresources.knife`

## Добавление рецепта

```zenscript
//mods.skyresources.knife.addRecipe(IItemStack output, IItemStack);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Удаление рецепта

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```