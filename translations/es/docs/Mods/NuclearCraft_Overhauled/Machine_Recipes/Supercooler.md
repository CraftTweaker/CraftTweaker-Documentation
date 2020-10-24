# Supercooler

## Importing the Package
`mods.nuclearcraft.SupercoolerSupercooler`

## Adding Recipes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.Supercooler.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Supercooler.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Supercooler.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Supercooler.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Supercooler.removeAllRecipes();Supercooler.removeAllRecipes();
```