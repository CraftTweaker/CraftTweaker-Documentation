# 化学リアクタ

## パッケージのインポート
`mods.techreborn.chemicalReactor`

## レシピを追加中
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IInput2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(IIngredient 食材);
mods.techreborn.chemicalReactor.removeRecipe(IItemStack output);
mods.techreborn.chemicalReactor.removeAll();
```