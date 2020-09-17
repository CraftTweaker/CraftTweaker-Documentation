# 工業用製材所

## パッケージのインポート
`mods.techreborn.industrialSawmill`

## レシピを追加中
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick);
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick, boolean useOreDic);
```

## レシピを削除
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(IIngredient 食材);
mods.techreborn.industrialSawmill.removeRecipe(IItemStack output);
mods.techreborn.industrialSawm.removeAll();
```