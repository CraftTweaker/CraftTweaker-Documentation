# 岩石研磨机

*rockgrinder* 软件包用于添加或删除配方到/从Rock Grinder.

## 导入包

您可以使用 `mods.skyresources.rockgrinder` 调用 *rockgrinder* 软件包

## 配方添加

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

///mods.skyresources.rockgrinder.addRecipe.addRecipe(IItemStack output, IItemStack input, float che);
mods.skyresources.rokgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## 删除配方

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(StemStack 输出);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```