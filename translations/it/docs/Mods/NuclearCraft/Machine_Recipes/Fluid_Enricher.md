# Fluido Arricchito

## Importazione del pacchetto
`mods.nuclearcraft.dissolutore`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.dissolver.addRecipe([itemInput, fluidInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.dissolver.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.dissolver.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.dissolver.removeAllRicette();
```