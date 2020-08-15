# 工業用ブラスト炉

## パッケージのインポート
`mods.techreborn.blastFurnace`

## レシピを追加中
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IInput2, int ticktime, int euTick, int neededHeat);
```

## レシピを削除
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient 食材);
mods.techreborn.blastFurnace.removeRecipe(IItemStack output);
mods.techreborn.blastFurnace.removeAll();
```