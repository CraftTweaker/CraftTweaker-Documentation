# Imbuer

The Imbuer package is used for adding or removing recipes to/from the Thermal Expansion Alchemical Imbuer.

## Calling
You can call the Imbuer package using `mods.thermalexpansion.Imbuer`

## Recipe addition

If `empowered` is false, the recipe will be added to the Standard Imbuer, to the Empowered one otherwise

```
//mods.thermalexpansion.Imbuer.addRecipe(ILiquidStack output, IItemStack input, ILiquidStack inputFluid, int energy)
mods.thermalexpansion.Imbuer.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <liquid:water> * 1000, 3000);
```

## Recipe removal

```
//mods.thermalexpansion.Imbuer. removeRecipe(IItemStack input, ILiquidStack secondInput)
mods.thermalexpansion.Imbuer.removeRecipe(<minecraft:iron_ingot>, <liquid:water> * 1000);
```