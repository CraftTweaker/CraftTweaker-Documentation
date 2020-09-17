# ロックグラインダー

*rockgrinder* パッケージは、Rock Grinderへのレシピの追加や削除に使用されます。

## 発信中

*mods.skyresources.rockgrinder* を使って `rockgrinder` を呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.rockgrinder.addRecipe()<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## レシピの削除

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack output);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```