# Magma Crucible / Crucible

## Methods

#### Add Recipe

The following script will add a recipe that will output 250 mB of Lava by Melting a Diamond, consuming 500 RF.

```zenscript
// <recipetype:thermal:crucible>.addRecipe(String name, IFluidStack output, IIngredient ingredient, int energy);
<recipetype:thermal:crucible>.addRecipe("crucible_test", <fluid:minecraft:lava> *250, <item:minecraft:diamond>, 500);
```

#### Remove Recipes

The follow script will remove all Crucible recipes that output Lava.

```zenscript
// <recipetype:thermal:crucible>.removeRecipe(IFluidStack output);
<recipetype:thermal:crucible>.removeRecipe(<fluid:minecraft:lava>);
```
