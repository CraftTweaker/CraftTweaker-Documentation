# Turbina de vapor

## Importando el Paquete
`mods.nuclearcraft.TurbineTurbina`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Turbine.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double powerPerMB, double expansionLevel, @Optional String particleEffect, @Optional double particleSpeedMultiplier);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerTurbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Turbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Turbine.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.turbine.removeAllRecipes();
```