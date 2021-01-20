# Alchemical Imbuer / Brewer

## Methods

#### Add Recipe

The following script will add a recipe that will output 250 mB of Lava by Brewing 250 mB of Water, using a Cookie as a catalyst, and consuming 500 RF.

```zenscript
// <recipetype:thermal:brewer>.addRecipe(String name, IFluidStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:brewer>.addRecipe("brewer_test", <fluid:minecraft:lava> *250, <item:minecraft:cookie>, <fluid:minecraft:water> *250, 500);
```

#### Remove Recipes

The following script will remove all Brewer recipes that output Water. As Thermal Expansion adds Brewer recipes after scripts run since they are based on potions, the following script will remove a recipe that doesn't exist. This method is mainly for other mods that add brewer recipes before scripts are ran.

```zenscript
// <recipetype:thermal:brewer>.removeRecipe(IFluidStack output);
<recipetype:thermal:brewer>.removeRecipe(<fluid:minecraft:water>);
```
