# 凝縮器
**注意：部分的に壊れている**

## パッケージのインポート
`mods.nuclearcraft.Condenser凝縮器`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Condenser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature);
```

## レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerCondenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Condenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Condenser.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Condenser.removeAllRecipes();Condenser.removeAllRecipes();
```