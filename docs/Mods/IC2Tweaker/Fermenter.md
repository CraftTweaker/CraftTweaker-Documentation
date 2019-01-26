# Fermenter

## Package
`import mods.ic2.Fermenter;`

## Methods
- **ILiquidStack output** The fermented fluid
- ***ILiquidStack input**  The input fluid
- **int heat** The amount of heat required for fermentation

## Addition

```
mods.ic2.Fermenter.addRecipe(ILiquidStack output, ILiquidStack input, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```
