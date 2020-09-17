# Мельница

Мельница - это машина, которая преобразует входной элемент в выходной элемент с помощью пара.

## Пакет
`mods.steamagerevolution.Grinder`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[IItemStack](/Vanilla/Items/IItemStack/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки
- **int SteamCost** Стоимость Пара на машине для обработки

## Сложение

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Удаление

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
