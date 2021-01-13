# Multiservo Press

## 加算

```zenscript
//<recipetype:thermal:press>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient[] ingredients, int energy);
<recipetype:thermal:press>.addRecipe("press_test", [<item:minecraft:cobblestone> % 100], <fluid:minecraft:water>, [<item:minecraft:dirt>], 500);
```

## Removal

```zenscript
//<recipetype:thermal:press>.removeRecipe(IItemStack[] itemOutputs, IFluidStack[] fluidOutputs);
//<recipetype:thermal:press>.removeRecipe([<item:minecraft:cobblestone>], [<fluid:minecraft:water>]);
```
