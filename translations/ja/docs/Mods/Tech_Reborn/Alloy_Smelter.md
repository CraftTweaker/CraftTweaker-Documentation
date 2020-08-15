# 合金精錬機

## パッケージのインポート
`mods.techreborn.alloySmelter`

## レシピを追加中
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack 出力, IIngredient input1, IInput2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient成分A, IIngredient成分B);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```