# 工業用エレクトロライザー

## パッケージのインポート
`mods.techreborn.industrialElectrolyzer`

## レシピを追加中
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient sels, IInput2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IIngredient 食材);
mods.techreborn.industrialElectrolyzer.removeRecipe(IItemStack output);
mods.techreborn.industrialElectrolyzer.removeAll();
```