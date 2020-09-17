# Stopień

Pakiet `Stop` pozwala na dodanie lub usunięcie przepisów stopu.

## Dzwonienie

Możesz wywołać pakiet stopu używając `mods.tconstruct.Alloy`

## Dodaj receptury stopu

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack, ILiquidStack[] wejścia);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Usuwanie przepisów stopu

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] wejścia);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```