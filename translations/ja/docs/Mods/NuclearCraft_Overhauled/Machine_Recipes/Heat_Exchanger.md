# 熱交換
**注意：部分的に壊れている**

## パッケージのインポート
`mods.nuclearcraft.HeatExchangerHeatExchanger`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double heatRequired, int temperatureIn, int temperatureOut);
```

## レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerHeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();HeatExchanger.removeAllRecipes();
```