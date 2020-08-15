# 热源

*热源* 包用于添加或移除某些机器/流程的热源。

**注意：这些函数仅适用于有方块表单的项目！**

## 导入包

您可以使用 `mods.skyresources.heatsources` 调用 *热源* 包

## 热源添加

```zenscript
//mods.skyresources.heatsources.add(IItemStack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## 热源删除

```zenscript
//mods.skyresources.heatsources.remove(IItemStack 输出);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```