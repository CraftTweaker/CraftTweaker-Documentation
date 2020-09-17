# Алхимическое слияние

Пакет *слияния* используется для добавления или удаления рецептов в/из процесса алхимического синтеза.

## Звонок

Вы можете вызвать пакет *fusion* с помощью `mods.skyresources.fusion`

## Добавление рецепта

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack output, IItemStack[] input, float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Удаление рецепта

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```