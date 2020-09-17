# 燃料のリプロセッサ

## パッケージのインポート
`mods.nuclearcraft.FuelReprocessor燃料リプロセッサ`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient temOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## レシピを削除
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.FuelReprocessor.removeAllRecipes();
```