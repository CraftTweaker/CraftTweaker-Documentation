# 关键的

*个熔炉* 包用于添加或删除配方到或从残忍中移除配方。

## 导入包

您可以使用 `mods.skyresources.cruple` 调用 *crypable* 包

## 配方添加

```zenscript
//mods.skyresources.cruble.addRecipe(ILiquidStack output, IItemStack input);
mods.skyresources.cruble.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## 删除配方

```zenscript
//mods.skyresources.cruble.removeRecipe(ILiquidStack output);
mods.skyresources.cruble.removeRecipe(<liquid:lava>);
```