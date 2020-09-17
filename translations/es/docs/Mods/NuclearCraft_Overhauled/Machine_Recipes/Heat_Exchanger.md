# Intercambiador de calor
**Nota: Parcialmente roto**

## Importando el Paquete
`mods.nuclearcraft.HeatExchangerCambiador de calor`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double heatRequired, int temperatureIn, int temperatureOut);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerHeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();HeatExchanger.removeAllRecipes();
```