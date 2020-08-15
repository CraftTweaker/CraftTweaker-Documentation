# Infuser verfallen

## Paket wird importiert
`mods.nuclearcraft.infuser`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.infuser.addRecipe([itemInput, fluidInput, itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.infuser.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.infuser.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.infuser.removeAllRecipes();
```