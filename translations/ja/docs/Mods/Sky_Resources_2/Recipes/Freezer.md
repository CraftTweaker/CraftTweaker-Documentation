# フリーザー

*freezer* パッケージは、フリーザーへのレシピの追加や削除に使用されます。

## 発信中

*mods.skyresources.freezer* を使用して `freezer` パッケージを呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.freezer.addRecipe(IItemStack 出力, IItemStack 入力, int ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## レシピの削除

```zenscript
//mods.skyresources.freezer.removeRecipe(IItemStack output);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```