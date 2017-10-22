# Oil Generator

## Package
`mods.actuallyadditions.OilGen`


## Addition


`genTime` defaults to 100 if omitted
```
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Removal

```
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack output);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```