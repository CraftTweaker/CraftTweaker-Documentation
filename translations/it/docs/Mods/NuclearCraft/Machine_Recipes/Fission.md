# Fissione

## Importazione del pacchetto
`mods.nuclearcraft.fission`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.fission.addRecipe([itemInput, itemOutput, double baseTime, double basePower, double baseHeat, String guiName, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.fission.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fission.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.fission.removeAllRecipes();
```