# Lingotto Ex

## Importazione del pacchetto
`mods.nuclearcraft.IngotFormer`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.IngotFormer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.IngotFormer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.IngotFormer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.IngotFormer.removeAllRice();
```