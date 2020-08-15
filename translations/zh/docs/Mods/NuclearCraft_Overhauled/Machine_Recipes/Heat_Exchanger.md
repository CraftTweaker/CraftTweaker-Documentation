# Heat Exchanger
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.HeatExchanger`

## 添加配方
```zenscript
mods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double heatRequired, int temperatureIn, int temperatureOut);
```

## 删除配方
```zenscript
mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();
```