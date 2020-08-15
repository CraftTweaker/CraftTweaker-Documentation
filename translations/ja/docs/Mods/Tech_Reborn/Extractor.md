# 抽出ツール

## パッケージのインポート
`mods.techreborn.extractor`

## レシピを追加中
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack 出力, IIngredient input1, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.extractor.removeInputRecipe(IInputRecipe);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```