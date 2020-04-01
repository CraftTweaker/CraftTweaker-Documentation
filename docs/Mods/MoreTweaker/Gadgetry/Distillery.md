# Distillery

## Package
`moretweaker.gadgetry.Distillery`

## Addition

```zenscript
//moretweaker.gadgetry.Distillery.add(IItemStack output, ILiquidStack fluidOutput, IIngredient input, ILiquidStack fluidInput);
moretweaker.gadgetry.Distillery.add(<minecraft:diamond>, <liquid:water> * 5, <minecraft:coal>, <fluid:lava> * 10);
```

## Removal

```zenscript
//moretweaker.gadgetry.Distillery.remove(IIngredient output);
moretweaker.gadgetry.Distillery.remove(<minecraft:diamond>);

moretweaker.gadgetry.Distillery.removeAll();
```