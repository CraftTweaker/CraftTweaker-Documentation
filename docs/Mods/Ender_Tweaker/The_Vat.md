# The Vat
## Package
`import mods.enderio.Vat;`

## Method
**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** - The output fluid (right tank).

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - The input fluid (left tank).

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - Items that can go in slot 1.

**float[] slot1Mults** - The multipliers for the items in slot 1. Must be the same length as slot1Solids.

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - Items that can go in slot 2.

**float[] slot2Mults** - The multipliers for the items in slot 2. Must be the same length as slot2Solids.

**@Optional int energyCost** - How much FE the recipe uses. Defaults to 5000.

## Addition
```
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

mods.enderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```
## Removal
```
mods.enderio.Vat.removeRecipe(ILiquidStack output);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```
