# Compressor

## パッケージのインポート
`mods.techreborn.compressor`

## レシピを追加中
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, IIngredient input1, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.compressor.removeInputRecipe(IInputRecipe);
mods.techreborn.compressor.removeRecipe(IItemStack output);
mods.techreborn.compressor.removeAll();
```