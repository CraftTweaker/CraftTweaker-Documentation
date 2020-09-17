# 化学聚合催化剂

*催化剂* 包用于添加或移除Alchemical Fuse催化剂。

## 导入包

您可以使用 `mods.skyresources.catalysts</em> 软件包调用 <em>催化剂。`

## 催化剂添加

```zenscript
//mods.skyresources.catalysts.add(IItemStack, float value);
mods.skyresources.catalysts.add(<minecraft:diamond>, 4.20);
```

## 催化剂移除

```zenscript
//mods.skyresources.catalysts.remove(ItemStack output);
mods.skyresources.catalysts.remove(<skyresources:alchemyitemcomponent:2>);
```