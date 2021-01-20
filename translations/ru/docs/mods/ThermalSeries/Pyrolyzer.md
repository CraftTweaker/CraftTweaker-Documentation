# Pyrolyzer

## Methods

#### Add Recipe

The following script will add recipes that will:

1) Output Coal 100% of the time by Pyrolyzing a Cookie, consuming 500 RF. 2) Output Coal 100% of the time and 250 mB of Refined Fuel by Pyrolyzing a Cookie, consuming 500 RF.


```zenscript
// <recipetype:thermal:pyrolyzer>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
<recipetype:thermal:pyrolyzer>.addRecipe("pyrolyzer_test_with_item", [<item:minecraft:coal> %100], <item:minecraft:cookie>, 500);
<recipetype:thermal:pyrolyzer>.addRecipe("pyrolyzer_test_with_item_and_fluid", [<item:minecraft:coal> %100], <fluid:thermal:refined_fuel> *250, <item:minecraft:cookie>, 500);
```

#### Remove Recipes

The following script will remove all Pyrolyzer recipes that output Charcoal and Creosote Oil.

```zenscript
// <recipetype:thermal:pyrolyzer>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:pyrolyzer>.removeRecipe([<item:thermal:charcoal>], [<fluid:thermal:creosote>]);
```
