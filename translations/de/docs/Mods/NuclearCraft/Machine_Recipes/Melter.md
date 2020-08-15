# Schmelze

## Paket wird importiert
`mods.nuclearcraft.melter`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.melter.addRecipe([itemInput, fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.melter.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.melter.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.melter.removeAllRecipes();
```