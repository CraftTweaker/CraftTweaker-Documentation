# 压印器

压印器相关包用于为精致存储的压印器添加或移除配方。

## 导入
使用 `mods.refinedstorage.Solderer` 以导入压印器相关包

## 添加配方

rows 数组的长度 **必须** 为3！如果需要空槽请使用 `null` 。

```
//mods.refinedstorage.Solderer.addRecipe(IItemStack output, int time, IItemStack[] rows);
//output 输出
//time 时间
//rows 输入
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## 移除配方

```
//mods.refinedstorage.Solderer.removeRecipe(IItemStack output);
//output 输出
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```
