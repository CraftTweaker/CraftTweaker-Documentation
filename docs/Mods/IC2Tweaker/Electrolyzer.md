# Electrolyzer

## Package
`import mods.ic2.Electrolyzer`

## Addition

`ILiquidStack[]` is  the output Array of all outputs. Each slot corresponds to Down-Up-North-South-West-East direction
```
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] outputs, ILiquidStack input, ILiquidStack input, ILiquidStack input, ILiquidStack input, ILiquidStack input, int power, @Optional int time;

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```
