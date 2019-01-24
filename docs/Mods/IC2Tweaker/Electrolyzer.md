# Electrolyzer

## Package
`import mods.ic2.Electrolyzer`

## Methods
 - **ILiquidStack[] outputs** Array of all outputs. Each slot corresponds to Down-Up-North-South-West-East direction. Tailing null may be omitted.
- **ILiquidStack input**     The input
- **int power**              Power consumption, measured in EU/tick
- **@Optional int time**   Time cost. Default to 200 if not given.
 
## Addition
```
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] outputs, ILiquidStack input, ILiquidStack input, ILiquidStack input, ILiquidStack input, ILiquidStack input, int power, @Optional int time;

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```
