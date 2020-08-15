# 大釜クリーニング

大釜へのレシピの追加や削除には、 *大釜洗浄* パッケージが使用されます。

## 発信中

*mods.skyresources.cauldronclean* を使って `caulonclean` を呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## レシピの削除

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack output);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```