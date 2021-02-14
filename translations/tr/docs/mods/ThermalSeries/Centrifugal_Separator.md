# Centrifugal Separator / Centrifuge

## Methods

#### Add Recipe

The following script will add recipes that will:

1) Output a Diamond 100% of the time and an Emerald 100% of the time by Centrifuging Dirt, consuming 500 RF. 2) Output 250 mB of Resin by Centrifuging a Diamond, consuming 500 RF. 3) Output a Diamond 100% of the time, an Emerald 100% of the time and 250 mB of Lava by Centrifuging Dirt, consuming 500 RF.

```zenscript
// <recipetype:thermal:centrifuge>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
<recipetype:thermal:centrifuge>.addRecipe("centrifuge_test_with_item", [<item:minecraft:diamond> % 100, <item:minecraft:emerald> %100], <fluid:minecraft:empty>, <item:minecraft:dirt>, 500);
<recipetype:thermal:centrifuge>.addRecipe("centrifuge_test_with_fluid", [], <fluid:thermal:resin> *250, <item:minecraft:diamond>, 500);
<recipetype:thermal:centrifuge>.addRecipe("centrifuge_test_with_item_and_fluid", [<item:minecraft:diamond> % 100, <item:minecraft:emerald> %100], <fluid:minecraft:lava> *250, <item:minecraft:dirt>, 500);
```

#### Remove Recipes

The following script will remove recipes that will:

1) Output Orange Dye. 2) Output Sand, Bitumen, Tar, and Crude Oil.

```zenscript
// <recipetype:thermal:centrifuge>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:centrifuge>.removeRecipe(<item:minecraft:orange_dye>);
<recipetype:thermal:centrifuge>.removeRecipe([<item:minecraft:sand>, <item:thermal:bitumen>, <item:thermal:tar>], [<fluid:thermal:crude_oil>]);
```
