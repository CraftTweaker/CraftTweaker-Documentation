# Wirówka

## Importowanie pakietu
`mods.nuclearcraft.Wirówka`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Centrifuge.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny proces promieniowania);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Centrifuge.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Centrifuge.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.wiryfuge.removeAllRecipes();
```