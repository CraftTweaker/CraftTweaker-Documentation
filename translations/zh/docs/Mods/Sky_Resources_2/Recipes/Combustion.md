# Combustion

*燃烧* 包被用于添加或从燃烧过程中移除配方。

## 导入包

您可以使用 `mods.skyresources.complus` 调用 *燃烧* 包

## 配方添加

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack output, IItemStack[……]input, int temstemature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## 删除配方

```zenscript
//mods.skyresources.combustion.removeRecipe(StemStack 输出);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```