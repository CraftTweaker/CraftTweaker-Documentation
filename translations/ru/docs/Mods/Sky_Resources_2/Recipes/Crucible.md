# Котел

*Тихий* пакет используется для добавления или удаления рецептов в/из Котла.

## Звонок

Вы можете вызвать пакет *распятый* с помощью `mods.skyresources.crucible`

## Добавление рецепта

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack), вход IItemStack;
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Удаление рецепта

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```