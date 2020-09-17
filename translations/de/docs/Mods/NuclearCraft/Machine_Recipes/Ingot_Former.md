# Früher Barren

## Paket wird importiert
`mods.nuclearcraft.ingot_former`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.ingot_former.addRecipe([fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.ingot_former.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.ingot_former.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.ingot_former.removeAllRecipes();
```