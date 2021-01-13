# Fractionating Still

## Addition

```zenscript
//<recipetype:thermal:refinery>.addRecipe(String name, MCWeightedItemStack itemOutput, IFluidStack[] fluidsOutput, IFluidStack inputFluid, int energy);
<recipetype:thermal:refinery>.addRecipe("refinery_test", <item:minecraft:diamond>, [<fluid:minecraft:lava>, <fluid:minecraft:water>], <fluid:minecraft:water>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:refinery>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:refinery>.removeRecipe([<item:thermal:rosin>], [<fluid:thermal:tree_oil>]);
```
