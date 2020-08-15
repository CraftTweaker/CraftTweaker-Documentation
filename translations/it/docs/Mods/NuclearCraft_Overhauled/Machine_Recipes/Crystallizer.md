# Cristallizzatore

## Importazione del pacchetto
`mods.nuclearcraft.Cristallizzatore`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.Crystallizer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.Crystallizer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Crystallizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Crystallizer.removeAllRicette();
```