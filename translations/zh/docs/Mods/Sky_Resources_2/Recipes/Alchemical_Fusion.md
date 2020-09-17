# 化学聚合

*聚变* 软件包用于添加或删除配方到/从炼金术聚合过程中。

## 导入包

您可以使用 `mods.skyresources.聚变` 调用 *聚变* 包

## 配方添加

```zenscript
//mods.skyresources.fusion.addRecipe(StemStack output, IItemStack[] input, float catalystusedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420;
```

## 删除配方

```zenscript
//mods.skyresources.fusion.removeRecipe(StemStack 输出);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```