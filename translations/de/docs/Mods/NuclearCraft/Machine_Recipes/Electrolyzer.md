# Elektrolyzer

## Paket wird importiert
`mods.nuclearcraft.electrolyzer`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.electrolyser.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.electrolyser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.electrolyser.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.electrolyser.removeAllRecipes();
```