# 蒸気タービン。

## パッケージのインポート
`mods.nuclearcraft.TurbineTurbine`

## レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Turbine.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double powerPerMB, double expansionLevel, @Optional String particleEffect, @Optional double particleSpeedMultiplier);
```

## レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerTurbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Turbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Turbine.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.turbine.removeAllRecipes();
```