# Centrifugal Separator

## Сложение

```zenscript
//<recipetype:thermal:centrifuge>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
<recipetype:thermal:centrifuge>.addRecipe("centrifuge_test", [<item:minecraft:gold_ingot> % 120, <item:minecraft:iron_ingot> %100], <fluid:minecraft:lava>, <item:minecraft:dirt>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:centrifuge>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:centrifuge>.removeRecipe([], [<fluid:cofh_core:honey>]);
```
