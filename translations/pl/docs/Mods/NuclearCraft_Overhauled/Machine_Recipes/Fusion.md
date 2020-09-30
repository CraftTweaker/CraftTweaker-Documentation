# Fusion
**Note: Not yet implemented**

## Importing the Package
`mods.nuclearcraft.Fusion`

## Adding Recipes
```zenscript
mods.nuclearcraft.Fusion.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, double comboTime, double comboPower, double comboHeatVar, double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Fusion.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.Fusion.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Fusion.removeAllRecipes();
```