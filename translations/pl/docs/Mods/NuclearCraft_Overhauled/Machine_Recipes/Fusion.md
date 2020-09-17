# Fuzja
**Uwaga: Jeszcze nie zaimplementowane**

## Importowanie pakietu
`mods.nuclearcraft.Fuzja`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Fusion.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack płynny Output1, ILiquidStack płynny Output2, ILiquidStack płynny Output3, ILiquidStack płynny Output4, podwójny comboTime, podwójny comboPower, podwójny comboHeatVar, podwójne promienienie);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Fusion.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.Fusion.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Fusion.removeAllRecipes();
```