# Centrifuge

## Importing the Package
`mods.nuclearcraft.Centrifuge`

## Adding Recipes
```zenscript
mods.nuclearcraft.Centrifuge.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4 , @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Centrifuge.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Centrifuge.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Centrifuge.removeAllRecipes();
```