# Масляный генератор

## Пакет

`mods.actuallyadditions.OilGen`

## Сложение

`genTime` по умолчанию 100, если отсутствует

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Удаление

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```