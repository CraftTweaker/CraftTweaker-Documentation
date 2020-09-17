# 冷凝器

*冷凝器* 包用于添加或删除配方到冷却器。

## 导入包

您可以调用 *冷凝器* 包使用 `mods.skyresources.condenser`

## 配方添加

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack output, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## 删除配方

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack 输出);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```