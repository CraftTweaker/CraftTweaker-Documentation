# 干线

`干燥` 软件包允许您添加或删除干燥配方。

## 导入包

您可以使用 `mods.tconstruct.Diring` 来调用干燥包

## 添加

时间在刻度

```zenscript
//mods.tconstruct.Drying.addRecipe(IItemStack output, IIngredient input, int time);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## 移除

```zenscript
//mods.tconstruct.drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

/mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```