# Паровой молот

Steam Hammer - это машина, которая преобразует два входных элемента в выходной предмет с помощью пара.

## Пакет
`mods.Steamagerevolution.SteamHammer`.

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[IItemStack](/Vanilla/Items/IItemStack/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки
- **int SteamCost** Стоимость Пара на машине для обработки

## Сложение

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient input, IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Удаление

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(выход IItemStack);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.SteamHammer.removeAll();
```
