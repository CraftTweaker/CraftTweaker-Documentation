# Fractionating Still / Refinery

## Methods

#### Addition

The following script will add recipes that will:

1) Output a Diamond by refining 500 mB of Water, consuming 500 RF.
2) Output 100 mB of Lava by refining 500 mB of Water, consuming 500 RF.
3) Output a Diamond, 100 mB of Lava and 100 mB of Resin by refining 500 mB of Water, consuming 500 RF.

```zenscript
//<recipetype:thermal:refinery>.addRecipe(String name, MCWeightedItemStack itemOutput, IFluidStack[] fluidsOutput, IFluidStack inputFluid, int energy);
<recipetype:thermal:refinery>.addRecipe("refinery_test_with_item", <item:minecraft:diamond>, [<fluid:minecraft:empty>], <fluid:minecraft:water> *500, 500);
<recipetype:thermal:refinery>.addRecipe("refinery_test_with_fluid", <item:minecraft:air>, [<fluid:minecraft:lava> *100], <fluid:minecraft:water> *500, 500);
<recipetype:thermal:refinery>.addRecipe("refinery_test_with_item_and_fluid", <item:minecraft:diamond>, [<fluid:minecraft:lava> *100, <fluid:thermal:resin> *100], <fluid:minecraft:water> *500, 500);
```

#### Removal

The following script will remove all Refinery recipes that output Tar and Refined Fuel.

```zenscript
//<recipetype:thermal:refinery>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:refinery>.removeRecipe([<item:thermal:tar>], [<fluid:thermal:refined_fuel>]);
```
