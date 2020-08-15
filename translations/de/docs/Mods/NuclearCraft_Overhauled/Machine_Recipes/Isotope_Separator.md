# Isotope Separator

## Paket wird importiert
`mods.nuclearcraft.Trennzeichen`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Separator.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Separator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Separator.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2);
mods.nuclearcraft.Separator.removeAllRezept();
```