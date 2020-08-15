# Infuser

## Paket wird importiert
`mods.nuclearcraft.Infuser`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Infuser.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Infuser.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Infuser.removeRecipeWithOutput(Igredient itemOutput);
mods.nuclearcraft.Infuser.removeAllRezept();
```