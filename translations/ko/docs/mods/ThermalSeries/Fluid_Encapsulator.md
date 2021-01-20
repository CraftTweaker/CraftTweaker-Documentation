# Fluid Encapsulator / Bottler

## Methods

#### Add Recipe

The following script will add a recipe that will output Magma by "Bottling" Cobblestone with 500 mB of Lava, consuming 500 RF.

```zenscript
// <recipetype:thermal:bottler>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:bottler>.addRecipe("bottler_test", <item:minecraft:magma_block>, <item:minecraft:stone>, <fluid:minecraft:lava> *500, 500);
```

#### Remove Recipes

The following script will remove all Bottler recipes that output a Honey Bottle.

```zenscript
// <recipetype:thermal:bottler>.removeRecipe(IItemStack... output);
<recipetype:thermal:bottler>.removeRecipe(<item:minecraft:honey_bottle>);
```
