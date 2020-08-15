# Морозильник

Пакет *морозильщик* используется для добавления или удаления рецептов в/из Фризера.

## Звонок

You can call the *freezer* package using `mods.skyresources.freezer`

## Добавление рецепта

```zenscript
//mods.skyresources.freezer.addRecipe(IItemStack, IItemStack input, int ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Удаление рецепта

```zenscript
//mods.skyresources.freezer.removeRecipe(IItemStack);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```