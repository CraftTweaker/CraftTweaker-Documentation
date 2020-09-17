# Kristallisator

## Paket wird importiert
`mods.nuclearcraft.crystallizer`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.crystallizer.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.crystallizer.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.crystallizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.crystallizer.removeAllRecipes();
```