# Котел

Котёл - это машина, которая преобразует входной элемент в выходную жидкость с помощью пара.

## Пакет
`mods.steamagerevolution.Crucible`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Результат рецепта.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки
- **int SteamCost** Стоимость Пара на машине для обработки

## Сложение

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient input, ILiquidStack, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Удаление

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
