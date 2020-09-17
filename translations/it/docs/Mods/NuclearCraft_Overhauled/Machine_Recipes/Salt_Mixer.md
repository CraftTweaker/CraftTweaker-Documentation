# Miscelatore Di Sale

## Importazione del pacchetto
`mods.nuclearcraft.SaltMixer`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.SaltMixer.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.SaltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.SaltMixer.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltMixer.removeAllRicette();
```