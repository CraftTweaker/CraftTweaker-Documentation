# Fusione
**Nota: Non ancora implementato**

## Importazione del pacchetto
`mods.nuclearcraft.Fusione`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.Fusion.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, doppio comboTime, doppio comboPower, doppio comboHeatVar, doppio processoRadiazione);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.Fusion.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.Fusion.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Fusion.removeAllRice();
```