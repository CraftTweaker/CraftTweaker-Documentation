# Очистка котлов

Котелок ** используется для добавления или удаления рецептов из котла.

## Звонок

Вы можете вызвать пакет *cauldroncleaning* с помощью `mods.skyresources.cauldronclean`

## Добавление рецепта

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Удаление рецепта

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```