# Superkühler

## Paket wird importiert
`mods.nuclearcraft.Superkühler`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Supercooler.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Supercooler.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Supercooler.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Supercooler.removeAllRezept();
```