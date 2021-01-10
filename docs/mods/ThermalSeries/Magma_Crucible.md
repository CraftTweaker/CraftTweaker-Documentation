# Magma Crucible

## Package

`mods.thermal.Crucible`

## Addition

```zenscript
//<recipetype:thermal:crucible>.addRecipe(String name, IFluidStack output, IIngredient ingredient, int energy);
<recipetype:thermal:crucible>.addRecipe("crucible_test", <fluid:minecraft:lava>, <item:minecraft:diamond>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:crucible>.removeRecipe(IFluidStack output);
<recipetype:thermal:crucible>.removeRecipe(<fluid:minecraft:lava>);
```
