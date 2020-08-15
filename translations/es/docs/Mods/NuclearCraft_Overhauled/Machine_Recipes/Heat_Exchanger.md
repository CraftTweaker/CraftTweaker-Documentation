# Heat Exchanger
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.HeatExchangerHeatExchanger`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double heatRequired, int temperatureIn, int temperatureOut);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerHeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();HeatExchanger.removeAllRecipes();
```