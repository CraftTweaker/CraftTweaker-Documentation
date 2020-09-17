# Инфузия жизни

Пакет *инфузии* используется для добавления или удаления рецептов в/из процесса Life Infusion.

## Звонок

Вы можете вызвать *инфузию* с помощью `mods.skyresources.infusion`

## Добавление рецепта

```zenscript
//mods.skyresources.infusion.addRecipe(IItemStack, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Удаление рецепта

```zenscript
//mods.skyresources.infusion.removeRecipe(IItemStack);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```