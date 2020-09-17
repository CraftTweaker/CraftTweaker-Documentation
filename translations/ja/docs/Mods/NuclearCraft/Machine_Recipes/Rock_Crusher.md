# ロッククラッシャー

## パッケージのインポート
`mods.naturcraft.rock_crusher`

## レシピを追加中
```zenscript
mods.numeric.rock_crusher.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, @Optional double timeMultiplier, @Optional door processRadiation]);
```

## レシピを削除
```zenscript
mods.naturcraft.rock_crusher.removeRecipeWithInput([itemInput]);
mods.nuclecraft.rock_crusher.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3]);
mods.nuclecraft.rock_crusher.removeAllRecipes();
```