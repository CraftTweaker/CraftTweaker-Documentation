# 核融合リアクターformat@@0

## パッケージのインポート
`mods.techreborn.fusionReactor`

## レシピを追加中
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IInput, IItemStack出力, int startEU, int euTick, int tickTime);
```

## レシピを削除
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe);
mods.techreborn.fusionReactor.removeRecipe(IItemStack output);
mods.techreborn.fusionReactor.removeAllveAll();
```