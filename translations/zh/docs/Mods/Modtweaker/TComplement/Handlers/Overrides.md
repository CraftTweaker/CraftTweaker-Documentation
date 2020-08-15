# 覆盖

Overrides packages 用于添加/移除熔融覆盖的配方。

## 导入包

您可以使用 `mods.tcomplety。覆盖`

## 覆盖条目添加

```zenscript
//mods.tcomplement.overrides.addRecipe(ILiquidStack output, IItemStack input, @Opinion tempet);
mods.tcomplus.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplus.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## 覆盖条目移除

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack output, @Optional IItemStack 输入);
mods.tcomplus.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplus.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```