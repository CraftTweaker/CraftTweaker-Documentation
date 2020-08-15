# Decay Generator

## Paket wird importiert
`mods.nuclearcraft.decay_generator`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.decay_generator.addRecipe([blockInput, blockOutput, doppelte Lebensdauer-Ticks, doppelte energyPerZweitens, @Optionale Doppelprozess-Strahlung]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.decay_generator.removeRecipeWithInput([blockInput]);
mods.nuclearcraft.decay_generator.removeRecipeWithOutput([blockOutput]);
mods.nuclearcraft.decay_generator.removeAllRecipes();
```