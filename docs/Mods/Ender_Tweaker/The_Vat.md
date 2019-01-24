# The Vat
## Package
`mods.enderio.Vat`

## Addition
**ILiquidStack output** - The output fluid (right tank).

**ILiquidStack input** - The input fluid (left tank).

**IIngredient[] slot1Solids** - Items that can go in slot 1.

**float[] slot1Mults** - The multipliers for the items in slot 1. Must be the same length as slot1Solids.

**IIngredient[] slot2Solids** - Items that can go in slot 2.

**float[] slot2Mults** - The multipliers for the items in slot 2. Must be the same length as slot2Solids.

**int energyCost** - How much FE the recipe uses. Defaults to 5000.
```
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);
```

**Someone Else Please do This**
```
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);
```
## Removal
```
mods.enderio.Vat.removeRecipe(<item>);

mods.enderio.Vat.removeRecipe(<item>);
```
