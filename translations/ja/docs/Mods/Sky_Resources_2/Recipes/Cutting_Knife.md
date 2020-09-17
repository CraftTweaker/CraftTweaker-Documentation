# 切断ナイフ

*ナイフ* パッケージは、切削ナイフへのレシピの追加や削除に使用されます。

## 発信中

*mods.skyresources.knife* を使って `ナイフ`パッケージを呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.knife.addRecipe(IItemStack 出力, IItemStack input);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## レシピの削除

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack output);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```