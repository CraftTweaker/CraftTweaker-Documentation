# Steam Turbine

## Importing the Package
`mods.nuclearcraft.Turbine`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Turbine.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double powerPerMB, double expansionLevel, @Optional String particleEffect, @Optional double particleSpeedMultiplier);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Turbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Turbine.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.turbine.removeAllRecipes();
```