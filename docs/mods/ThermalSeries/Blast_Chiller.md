# Blast Chiller / Chiller

## Methods

#### Addition

The following script will add recipes that will:

1) Output Glass when 250 mB of Resin are freezed.
2) Output Glass when 250 mB of Resin are freezed with a Ball Cast (the cast will not be consumed by the recipe).

```zenscript
// <recipetype:thermal:chiller>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack inputFluid, int energy);
<recipetype:thermal:chiller>.addRecipe("chiller_test", <item:minecraft:glass>, <item:minecraft:air>, <fluid:thermal:resin> *250, 500);
<recipetype:thermal:chiller>.addRecipe("chiller_test_with_cast", <item:minecraft:glass>, <item:thermal:chiller_ball_cast>, <fluid:thermal:resin> *250, 500);

```

#### Removal

The follow script will remove all Chiller recipes that output Ice.

```zenscript
//<recipetype:thermal:chiller>.removeRecipe(IItemStack... output);
<recipetype:thermal:chiller>.removeRecipe(<item:minecraft:ice>);
```
