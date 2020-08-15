# 化学リアクタ

## パッケージのインポート
`mods.nuclearcraft.ChemicalReactor化学反応器`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.ChemicalReactor.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.mods.nuclearcraft.ChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.ChemicalReactor.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2);
mods.nuclearcraft.ChemicalReactor.removeAllRecipes();ChemicalReactor.removeAllRecipes();
```