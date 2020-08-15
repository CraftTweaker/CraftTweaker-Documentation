# Dampfturbine

## Paket wird importiert
`mods.nuclearcraft.Turbine`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Turbine.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double powerPerMB, double expansionLevel, @Optional String particleEffect, @Optional double particleSpeedMultiplier);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Turbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Turbine.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.turbine.removeAllRecipes();
```