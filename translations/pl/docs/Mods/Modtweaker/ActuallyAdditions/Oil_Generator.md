# Generator oleju

## Pakiet

`mods.actuallyadditions.OilGen`

## Dodanie

`genTime` domyślnie 100 w przypadku pominięcia

```zenscript
//mods.actuyadditions.OilGen.addRecipe(ILiquidStace, gen int Gen.Amount);
//mods.actuyadditions.OilGen.addRecipe(ILiquidStac, gen genTime);

mods.rzeczywiścieadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## Usuwanie

```zenscript
//mods.actuyadditions.OilGen.removeRecipe(ILiquidStack);
mods.actuyadditions.OilGen.removeRecipe(<liquid:water>);
```