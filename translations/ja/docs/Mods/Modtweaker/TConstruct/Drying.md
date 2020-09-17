# 乾燥中

`乾燥` パッケージでは、ドライレシピを追加または削除できます。

## 発信中

`mods.tconstruct.Drying` を使ってドライビングパッケージを呼び出すことができます。

## 追加中

時間はダニです

```zenscript
//mods.tconstruct.Drying.addRecipe(IItemStack 出力, IIngredient input, int time);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## 削除中

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```