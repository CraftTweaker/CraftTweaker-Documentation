# Melter

## パッケージのインポート
`mods.nuclearcraft.MelterMelter`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Melter.addRecipe(IIngredient itemInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerMelter.removeRecipeWithInput(IInput);
mods.nuclearcraft.mods.nuclearcraft.Melter.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Melter.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Melter.removeAllRecipes();Melter.removeAllRecipes();
```