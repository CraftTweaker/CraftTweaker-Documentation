# 工業用研削機

## パッケージのインポート
`mods.techreborn.industrialGrinder`

## レシピを追加中
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IInput2, int ticktime, int euTick);
mods. echreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IInput2, ILiquidStack fluid, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(IIngredient 食材);
mods.techreborn.industrialGrinder.removeRecipe(IItemStack output);
mods.techreborn.industrialGrinder.removeAll();
```