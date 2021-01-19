# Alchemical Imbuer

## Addition

```zenscript
//<recipetype:thermal:brewer>.addRecipe(String name, IFluidStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:brewer>.addRecipe("brewer_test", <fluid:minecraft:lava>, <item:minecraft:dirt>, <fluid:minecraft:water>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:brewer>.removeRecipe(IFluidStack output);
<recipetype:thermal:brewer>.removeRecipe(<fluid:minecraft:water>);
```
