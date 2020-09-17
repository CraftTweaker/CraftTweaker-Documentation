# Melter

## Importazione del pacchetto
`mods.nuclearcraft.melter`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.melter.addRecipe([itemInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.melter.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.melter.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.melter.removeAllRicette();
```