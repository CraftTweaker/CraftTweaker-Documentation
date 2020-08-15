# 离心机

ModTinflow允许您添加或移除林业编码方案

## 导入包

您可以使用 `mods.forestry.Centrifuge` 来调用软件包。

## 删除配方

```zenscript
//mods.forestry.Centrifile.removeRecipe(IIngredient input);
mods.forestry.Centrifile.removeRecipe(<forestry:bee_combs:*>);

```

## Reipe 添加

```zenscript
//mods.forestry.Centrifile.addRecipe(WeightedItemStack[…]输出, IItemStack 组件, int 包装时间);
mods.forestry.Centrifile.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```