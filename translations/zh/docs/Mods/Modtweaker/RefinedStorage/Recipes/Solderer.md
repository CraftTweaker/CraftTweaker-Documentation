# 求解者

Solderer包用于添加/删除精致存储的配方

## 导入

你可以通过`mods.refinedstorage.Solderer`调用这个包

## 添加配方

数组长度**必须**为3！ 使用 `null`来表示空物品

```zenscript
//mods.eledstorage.Solder.addRecipe(IItemStack output, int time, IItemStack[] 行)；
mods.el. edstorage.Solder.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## 删除配方

```zenscript
//mods.eledstorage.Solder.removeRecipe(IItemStack 输出);
mods.elinedstorage.Solder.removeRecipe(<minecraft:iron_ingot>);
```