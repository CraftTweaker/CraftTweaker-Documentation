# Wirówka

## Importing the Package
`mods.nuclearcraft.Wirówka`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Centrifuge.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4 , @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Centrifuge.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Centrifuge.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Centrifuge.removeAllRecipes();
```