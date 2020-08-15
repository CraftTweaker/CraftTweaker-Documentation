# 燃料のリプロセッサ

## パッケージのインポート
`mods.naturcraft.fuel_reprocessor`

## レシピを追加中
```zenscript
mods.numercraft.fuel_reprocessor.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, itemOutput4, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## レシピを削除
```zenscript
mods.numercraft.fuel_reprocessor.removeRecipeWithInput([itemInput]);
mods.nuclecraft.fuel_reprocessor.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3, itemOutput4]);
mods.nuclecraft.fuel_reprocessor.removeAllRecipes();
```