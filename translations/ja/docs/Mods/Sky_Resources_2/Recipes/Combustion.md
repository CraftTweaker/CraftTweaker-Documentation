# Combustion

燃焼 *燃焼* パッケージは、燃焼プロセスへのレシピの追加や削除に使用されます。

## 発信中

*燃焼* パッケージは、 `mods.skyresources.燃焼`を使用して呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.comberion.addRecipe(IItemStack 出力, IItemStack[] input, int temperature);
mods.skyresources.comberion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## レシピの削除

```zenscript
//mods.skyresources.comberion.removeRecipe(IItemStack output);
mods.skyresources.燃焼.removeRecipe(<minecraft:diamond>);
```