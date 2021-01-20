# Alchemical Imbuer / Brewer

## Methods

#### Addition

The following script will add a recipe that will output 250 mB of Lava by brewing 250 mB of Water and using a Cookie as a catalyst.

```zenscript
//<recipetype:thermal:brewer>.addRecipe(String name, IFluidStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:brewer>.addRecipe("brewer_test", <fluid:minecraft:lava> *250, <item:minecraft:cookie>, <fluid:minecraft:water> *250, 500);
```

#### Removal

The follow script will remove all Brewer recipes that output Water.

```zenscript
//<recipetype:thermal:brewer>.removeRecipe(IFluidStack output);
<recipetype:thermal:brewer>.removeRecipe(<fluid:minecraft:water>);
```
