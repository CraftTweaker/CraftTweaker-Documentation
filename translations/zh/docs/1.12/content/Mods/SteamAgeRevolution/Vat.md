# Vat

The Vat is a machine that converts input items and fluids into an output fluid.

## 所属包
`mods.steamagerevolution.Vat`

## 使用方式

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** The result of the recipe.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** Fluid input of the recipe.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) inputItems** Items to input of the recipe.
- **int craftTime** Crafting time for machine to process

## 添加

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] input, IIngredient[] inputItems, ILiquidStack output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## 移除配方

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack output);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
