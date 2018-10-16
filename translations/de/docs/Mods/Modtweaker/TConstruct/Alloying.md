# Alloying

The `Alloy` package allows you to add or remove Alloy recipes.

## Calling

You can call the Alloy package using `mods.tconstruct.Alloy`

## Add Alloy Recipes

```JAVA
//mods.tconstruct.Alloy.addRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Removing Alloy Recipes

```JAVA
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```