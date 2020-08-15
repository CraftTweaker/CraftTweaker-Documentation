# Felsenkreuzer

## Paket wird importiert
`mods.nuclearcraft.RockCrusher`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.RockCrusher.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.RockCrusher.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.RockCrusher.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3);
mods.nuclearcraft.RockCrusher.removeAllRezept();
```