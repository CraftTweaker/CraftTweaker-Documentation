# Pyrolyzer

## 加

```zenscript
//<recipetype:thermal:pyrolyzer>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
<recipetype:thermal:pyrolyzer>.addRecipe("pyrolyzer_test", [<item:minecraft:coal> %100], <fluid:thermal:refined_fuel>, <item:minecraft:cookie>, 500);
```

## Removal

```zenscript
//<recipetype:thermal:pyrolyzer>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
<recipetype:thermal:pyrolyzer>.removeRecipe([<item:minecraft:coal>], [<fluid:thermal:refined_fuel>]);
```
