# Centrifugal Separator / Centrifuge

## Methods

#### Addition

The following script will add recipes that will:

1) Output a Diamond and an Emerald by centrifuging Dirt, consuming 500 RF.
2) Output a Diamond, an Emerald and 250 mB of Lava by centrifuging Dirt, consuming 500 RF.

```zenscript
// <recipetype:thermal:centrifuge>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
<recipetype:thermal:centrifuge>.addRecipe("centrifuge_test", [<item:minecraft:diamond> % 100, <item:minecraft:emerald> %100], <fluid:minecraft:empty>, <item:minecraft:dirt>, 500);
<recipetype:thermal:centrifuge>.addRecipe("centrifuge_test_with_fluid", [<item:minecraft:diamond> % 100, <item:minecraft:emerald> %100], <fluid:minecraft:lava> *250, <item:minecraft:dirt>, 500);
```

#### Removal

The following script will add recipes that will:

1) Remove all Centrifuge recipes that output Orange Dye.
2) Remove all Centrifuge recipes that output Sand, Bitumen, Tar, and Crude Oil.

```zenscript
// <recipetype:thermal:centrifuge>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:centrifuge>.removeRecipe(<item:minecraft:orange_dye>);
<recipetype:thermal:centrifuge>.removeRecipe([<item:minecraft:sand>, <item:thermal:bitumen>, <item:thermal:tar>], [<fluid:thermal:crude_oil>]);
```
