# Elektrolyzer

## Paket wird importiert
`mods.nuclearcraft.Elektrolyzer`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Electrolyser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Electrolyser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Electrolyser.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Electrolyser.removeAllRezept();
```