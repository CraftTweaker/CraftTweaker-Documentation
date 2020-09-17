# Turbina A Vapore

## Importazione del pacchetto
`mods.nuclearcraft.Turbina`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.Turbine.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, doppio powerPerMB, doppia espansioneLivello, @Optional String particleEffect, @Optional double particleSpeedMultiplier);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.Turbine.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Turbine.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.turbine.removeAllRicette();
```