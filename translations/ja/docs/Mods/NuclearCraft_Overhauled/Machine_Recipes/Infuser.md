# Infuser

## パッケージのインポート
`mods.nuclearcraft.InfuserInfuser`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Infuser.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## レシピを削除
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Infuser.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Infuser.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Infuser.removeAllRecipes();Infuser.removeRecipeWithOutput(IIngredient itemOutput);
mods.nurcraft.Infuser.removeAllRecipes();
```