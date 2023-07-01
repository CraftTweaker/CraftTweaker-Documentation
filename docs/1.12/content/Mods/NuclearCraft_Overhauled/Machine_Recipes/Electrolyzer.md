# Electrolyzer

## Importing the Package
`mods.nuclearcraft.Electrolyzer`

## Adding Recipes
```zenscript
mods.nuclearcraft.Electrolyzer.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Electrolyzer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Electrolyzer.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Electrolyzer.removeAllRecipes();
```
