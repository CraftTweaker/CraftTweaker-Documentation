# Дистиллятор

Дистиллятор – это машина, которая преобразует входную жидкость в выходную жидкость и вещь с помощью пара.

## Пакет
`mods.steamagerevolution.Distiller`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Результат рецепта.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ввода** Ввод рецепта.
- **int Time** время создания машины для обработки
- **int SteamCost** Стоимость Пара на машине для обработки

## Сложение

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack input, IItemStack outputStack, ILiquidStack, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## Удаление

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
