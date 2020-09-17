# Condensatore
**Nota: Parzialmente Rotto**

## Importazione del pacchetto
`mods.nuclearcraft.Condensatore`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.Condenser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperatura);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.Condenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Condenser.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Condenser.removeAllRicette();
```