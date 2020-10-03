# Oil Generator

## Package

`mods.actuallyadditions.OilGen`

## Addition

`genTime` defaults to 100 if omitted

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Removal

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack output);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```