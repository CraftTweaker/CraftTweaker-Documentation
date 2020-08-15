# 真空冷凍機

## パッケージのインポート
`mods.techreborn.vacuumFreezer`

## レシピを追加中
```zenscript
mods.techreborn.vacuumFreezer.addRecipe(IItemStack 出力, IIngredient input, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.vacuumFreezer.removeInputRecipe(IIngredient 食材);
mods.techreborn.vacuumFreezer.removeRecipe(IItemStack output);
mods.techreborn.vacuumFreezer.removeAll();
```