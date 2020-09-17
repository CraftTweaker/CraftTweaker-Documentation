# Скальная Мельница

Пакет *каменьная мельница* используется для добавления или удаления рецептов в/с Rock Grinder.

## Звонок

Вы можете вызвать пакет *rockgrinder* с помощью `mods.skyresources.rockgrinder`

## Добавление рецепта

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(IItemStack, IItemStack input, float chance);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Удаление рецепта

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```