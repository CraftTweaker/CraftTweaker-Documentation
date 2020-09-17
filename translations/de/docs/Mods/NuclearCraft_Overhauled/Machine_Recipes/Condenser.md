# Kondensator
**Hinweis: Teilweise kaputt**

## Paket wird importiert
`mods.nuclearcraft.Kondensator`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Condenser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Condenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Condenser.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Condenser.removeAllRezept();
```