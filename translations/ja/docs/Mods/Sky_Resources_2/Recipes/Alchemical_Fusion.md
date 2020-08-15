# 錬金術フュージョン（Alchemic Fusion）

*フュージョン* パッケージは、Alchemic Fusionプロセスへのレシピの追加や削除に使用されます。

## 発信中

*mods.skyresources.fusion* を使って `fusion`パッケージを呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack 出力, IItemStack[] input, float atalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## レシピの削除

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```