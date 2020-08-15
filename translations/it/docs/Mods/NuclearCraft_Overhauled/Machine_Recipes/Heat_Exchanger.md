# Scambiatore Di Calore
**Nota: Parzialmente Rotto**

## Importazione del pacchetto
`mods.nuclearcraft.Scambiatore Di Riscaldamento`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, doppio riscaldamentoRichiesto, int temperaturaIn, int temperaturaOut);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRicette();
```