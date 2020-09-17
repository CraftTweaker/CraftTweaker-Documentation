# Cauldron 清理

*caulronclear* 软件包用于添加或删除配方到或从Cauldron。

## 导入包

您可以调用 *caulronclear* 包使用 `mods.skyresources.cauldrclean`

## 配方添加

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## 删除配方

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(StemStack 输出);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```