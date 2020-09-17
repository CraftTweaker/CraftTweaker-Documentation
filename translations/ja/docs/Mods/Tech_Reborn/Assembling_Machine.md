# 組立機

## パッケージのインポート
`mods.techreborn.assemblingMachine`

## レシピを追加中
```zenscript
mods.techreborn.assemblingMachine.addRecipe(IItemStack 出力, IIngredient input1, IInput2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.assemblingMachine.removeInputRecipe(IInputRecipeA, IIngredient食材B);
mods.techreborn.assemblingMachine.removeRecipe(IItemStack output);
mods.techreborn.assemblingMachine.removeAll();
```