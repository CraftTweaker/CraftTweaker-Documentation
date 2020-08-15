# 抽出器

*waterextractor* パッケージは、ウォーター抽出プロセスへのレシピの追加または削除に使用されます。

## 発信中

*mods.skyresources.waterextractor* を使って `waterextractor` パッケージを呼び出すことができます。

## レシピの追加

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods.skyresources.waterextractor.insert.addRecipe(IItemStack output, IIngredient input, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## レシピの削除

```zenscript
//mods.skyresources.waterextractor.extractor.removeRecipe(int waterOut, IItemStack 出力, IIngredient input);
mods.skyresources.waterveRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.inserveRecipe(IItemStack 出力);
mods.skyresources.waterextractor.removeRecipe(<minecraft:clay>);
```