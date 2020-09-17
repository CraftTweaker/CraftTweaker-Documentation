# Печь Пара

Печь Steam - это машина, которая преобразует входной элемент в выходной предмет с помощью паровой установки.

## Пакет
`mods.steamagerevolution.SteamFurnace`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[IItemStack](/Vanilla/Items/IItemStack/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки
- **int SteamCost** Стоимость Пара на машине для обработки

## Сложение

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## Удаление

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
