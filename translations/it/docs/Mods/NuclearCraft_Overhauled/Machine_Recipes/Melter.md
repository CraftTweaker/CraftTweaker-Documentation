# Melter

## Importazione del pacchetto
`mods.nuclearcraft.Melter`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.Melter.addRecipe(IIngredient itemInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.Melter.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Melter.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Melter.removeAllRicette();
```