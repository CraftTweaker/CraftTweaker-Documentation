# Fissione Di Sale
**Nota: Parzialmente Rotto**

## Importazione del pacchetto
`mods.nuclearcraft.SaltFission`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.SaltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, doppia baseTime, doppia basePower, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRicette();
```