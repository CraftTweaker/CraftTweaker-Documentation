# ブラック リスト

ブラックリストパッケージは、メルターブラックリストへのレシピの追加/削除に使用されます。

## 発信中

`mods.tcomplement.Blacklist` を使ってブラックリストパッケージを呼び出すことができます。

## ブラックリストエントリの追加

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack出力, IItemStack input);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## ブラックリストのエントリの削除

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack input);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```