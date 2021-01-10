# Fluid Encapsulator

## Package

`mods.thermal.Bottler`

## Addition

```zenscript
//<recipetype:thermal:bottler>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:bottler>.addRecipe("bottler_test", <item:minecraft:dirt>, <item:minecraft:cobblestone>, <fluid:minecraft:water>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:bottler>.removeRecipe(IItemStack... output);
<recipetype:thermal:bottler>.removeRecipe(<item:minecraft:honey_bottle>);
```
