# 凝縮器

*condenser* パッケージは、Condenser へのレシピの追加や削除に使用されます。

## 発信中

*mods.skyresources.condenser* を使って `condenser` パッケージを呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack 出力, int tickTime, IItemStack 触媒, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## レシピの削除

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack output);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```