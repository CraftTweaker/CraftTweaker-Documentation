# Blast Chiller

## Addition

```zenscript
//<recipetype:thermal:chiller>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack inputFluid, int energy);
<recipetype:thermal:chiller>.addRecipe("chiller_test", <item:minecraft:glass>, <item:minecraft:dirt>, <fluid:thermal:resin>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:chiller>.removeRecipe(IItemStack... output);
<recipetype:thermal:chiller>.removeRecipe(<item:minecraft:ice>);
```
