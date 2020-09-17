# るつぼ可能

*るつぼ* パッケージは、レシピをCrucibleに追加または削除するために使用されます。

## 発信中

*crutible* パッケージは `mods.skyresources.cutible` で呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack 出力, IItemStack input);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## レシピの削除

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack出力);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```