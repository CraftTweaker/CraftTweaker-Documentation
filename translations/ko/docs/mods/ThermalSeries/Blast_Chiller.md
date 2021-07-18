# Blast Chiller / Chiller

## Methods

#### Add Recipe

The following script will add recipes that will:

1) Output Glass by Freezing 250 mB of Resin, consuming 500 RF. 2) Output Glass by Freezing 250 mB of Resin with a Ball Cast, consuming 500 RF.

```zenscript
// <recipetype:thermal:chiller>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack inputFluid, int energy);
<recipetype:thermal:chiller>.addRecipe("chiller_test", <item:minecraft:glass>, <item:minecraft:air>, <fluid:thermal:resin> *250, 500);
<recipetype:thermal:chiller>.addRecipe("chiller_test_with_cast", <item:minecraft:glass>, <item:thermal:chiller_ball_cast>, <fluid:thermal:resin> *250, 500);

```

### Chiller Casts

Thermal Expansion has a Chiller cast that is used in recipes (like the second example) which doesn't get consumed, it is the following:

```
chiller_ball_cast
```


#### Remove Recipes

The following script will remove all Chiller recipes that output Ice.

```zenscript
// <recipetype:thermal:chiller>.removeRecipe(IItemStack... output);
<recipetype:thermal:chiller>.removeRecipe(<item:minecraft:ice>);
```
