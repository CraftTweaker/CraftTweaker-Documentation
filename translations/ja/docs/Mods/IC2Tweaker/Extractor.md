# 抽出ツール

## パッケージ

`import mods.ic2.Extractor;`

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) の入力**

## 加算

```zenscript
mods.ic2.Extractor.addRecipe(IItemStack 出力, IIngredient input);

mods.ic2.Extractor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## 削除

- Ic2 Experimental を使用してレシピを削除する場合は、 `config/ic2/extractor.ini` 内の対応する行を削除してください。
- Ic2 Classic を使用してレシピを削除する場合は、 `config/ic2/ic2machineRecipes.json` 内の対応するレシピを無効にしてください。