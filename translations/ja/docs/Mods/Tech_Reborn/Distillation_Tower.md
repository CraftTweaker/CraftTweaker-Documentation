# 蒸留塔

## パッケージのインポート
`mods.techreborn.distillationTower`

## レシピを追加中
```zenscript
mods.techreborn.distillationTower.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IInput2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.distillationTower.removeInputRecipe(IIngredient 食材);
mods.techreborn.distillationTower.removeRecipe(IItemStack output);
mods.techreborn.distillationTower.removeAll();
```