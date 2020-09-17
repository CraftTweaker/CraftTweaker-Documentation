# Salzspaltung
**Hinweis: Teilweise kaputt**

## Paket wird importiert
`mods.nuclearcraft.Salzspaltung`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.SaltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double baseTime, double basePower, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRezept();
```