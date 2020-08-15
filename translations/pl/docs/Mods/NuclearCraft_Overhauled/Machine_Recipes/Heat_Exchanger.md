# Wymiennik ciepła
**Uwaga: Częściowo uszkodzone**

## Importowanie pakietu
`mods.nuclearcraft.Wymiennik ciepła`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack FluidStack Output, podwójne ogrzewanie, temperatura intreIn, temperatura int);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRecipes();
```