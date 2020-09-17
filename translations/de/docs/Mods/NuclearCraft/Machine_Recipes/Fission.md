# Spaltung

## Paket wird importiert
`mods.nuclearcraft.fission`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.fission.addRecipe([itemInput, itemOutput, double baseTime, double basePower, double baseHeat, String guiName, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.fission.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fission.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.fission.removeAllRecipes();
```