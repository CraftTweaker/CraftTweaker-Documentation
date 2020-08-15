# Heat Exchanger
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.HeatExchanger`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double heatRequired, int temperatureIn, int temperatureOut);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();
```