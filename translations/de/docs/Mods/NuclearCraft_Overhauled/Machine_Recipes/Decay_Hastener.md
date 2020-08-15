# Decay Hastener

## Paket wird importiert
`mods.nuclearcraft.DekayHastener`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.DecayHastener.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.DecayHastener.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.DecayHastener.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.DecayHastener.removeAllRezept();
```