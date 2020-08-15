# 剪切刀具

*knife* 软件包用于添加或删除配方到/移除剪切刀。

## 导入包

您可以使用 `mods.skyresources.knife</em> 软件包调用 <em>knife`

## 配方添加

```zenscript
//mods.skyresources.knife.addRecipe(StemStack output, IItemStack input);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## 删除配方

```zenscript
//mods.skyresources.knife.removeRecipe(StemStack 输出);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```