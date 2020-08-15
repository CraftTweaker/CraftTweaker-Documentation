# Flüssigkeits-Extraktor

## Paket wird importiert
`mods.nuclearcraft.Extraktor`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Extractor.addRecipe(IIngredient itemInput, IIngredient itemOutput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Extractor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Extractor.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.Extractor.removeAllRezept();
```