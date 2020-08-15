# Vat

Vat是一台机器，将输入项目和液体转换成输出液体。

## 所属包名
`mods.steamagerevolution.Vat`

## 方法

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** 该配方的结果。
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** 该配方的液体输入。
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) 输入项** 输入配方的项目
- **整理时间** 机器处理的制造时间

## 添加

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[……]input, IIngredient[……] inputItems, ILiquidStack output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## 移除配方

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack output);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
