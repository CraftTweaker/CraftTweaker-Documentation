# Produzione

## Importazione del pacchetto
`mods.nuclearcraft.manufactory`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.manufactory.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.manufactory.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.manufactory.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.manufactory.removeAllRicette();
```