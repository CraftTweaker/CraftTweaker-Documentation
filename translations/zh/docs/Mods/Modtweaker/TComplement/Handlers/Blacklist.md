# 黑名单

黑名单包用于添加/删除混合黑名单中的配方。

## 导入包

您可以使用 `mods.tcomplet.Blacklist 软件包。Blacklist`

## 黑名单条目添加

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack 输出, IItemStack 输入);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## 黑名单条目移除

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(StemStack 输入);
mods.tcomplet.blacklist.removeRecipe(<minecraft:cobblestone>);
```