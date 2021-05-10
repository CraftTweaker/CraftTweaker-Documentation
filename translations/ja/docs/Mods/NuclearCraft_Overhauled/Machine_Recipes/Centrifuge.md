# Centrifuge

## Importing the Package
`mods.nuclearcraft.CentrifugeCentrifuge`

## Adding Recipes
```zenscript
mods.nuclearcraft.Centrifuge.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, ILiquidStack fluidOutput5, ILiquidStack fluidOutput6, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.Centrifuge.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Centrifuge.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Centrifuge.removeAllRecipes();Centrifuge.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, ILiquidStack fluidOutput5, ILiquidStack fluidOutput6);
mods.nuclearcraft.Centrifuge.removeAllRecipes();
```