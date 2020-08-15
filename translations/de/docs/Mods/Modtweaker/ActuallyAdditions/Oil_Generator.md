# Ölgenerator

## Paket

`mods.actuallyadditions.OilGen`

## Addition

`genTime` ist standardmäßig 100, wenn weggelassen

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Entfernen

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack output);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```