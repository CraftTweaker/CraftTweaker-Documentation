# Refinery

## Package
`moretweaker.buildcraft.Refinery`

## Addition

```zenscript
//moretweaker.buildcraft.Refinery.addDistilling(ILiquidStack input, ILiquidStack output, ILiquidStack gasOutput, int mjCost);
moretweaker.buildcraft.Refinery.addDistilling(<liquid:water> * 10, <liquid:lava> * 10, <liquid:water> * 2, 1000);
```

## Removal

```zenscript
//moretweaker.buildcraft.Refinery.removeDistilling(ILiquidStack input);
moretweaker.buildcraft.Refinery.removeDistilling(<liquid:water>);

moretweaker.buildcraft.Refinery.removeAll();
```