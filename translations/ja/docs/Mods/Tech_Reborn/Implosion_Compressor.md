# Implosion Compressor

## パッケージのインポート
`mods.techreborn.implossionCompressor`

## レシピを追加中
```zenscript
mods.techreborn.implosCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IInput2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.implosCompressor.removeInputRecipe(IIngredient 食材);
mods.techreborn.implosCompressor.removeRecipe(IItemStack output);
mods.techreborn.implossionCompressor.removeAll();
```