# Сжигание

Пакет *для сжигания* используется для добавления или удаления рецептов в/в процесс сжигания.

## Звонок

Вы можете вызвать пакет *сгорания* с помощью `mods.skyresources.combustion`

## Добавление рецепта

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack, IItemStack[] ввод, int temperature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Удаление рецепта

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```