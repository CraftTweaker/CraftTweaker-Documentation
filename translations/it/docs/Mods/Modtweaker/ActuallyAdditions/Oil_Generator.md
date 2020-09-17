# Generatore Di Olio

## Pacchetto

`mods.actuallyadditions.OilGen`

## Addizione

`genTime` predefinito a 100 se omesso

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.Recipe(<liquid:lava>, 1000, 10);
```

## Rimozione

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack output);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```