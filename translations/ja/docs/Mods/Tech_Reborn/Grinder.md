# グラインダー

## パッケージのインポート
`mods.techreborn.grinder`

## レシピを追加中
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack 出力, IIngredient input1, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.grinder.removeInputRecipe(IInputRecipe));
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```