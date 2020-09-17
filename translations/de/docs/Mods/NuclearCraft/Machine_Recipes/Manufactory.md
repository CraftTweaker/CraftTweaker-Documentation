# Fabrik

## Paket wird importiert
`mods.nuclearcraft.manufacturtory`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Manutory.addRecipe([itemInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Manufactury.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.manufactory.removeAllRecipes();
```