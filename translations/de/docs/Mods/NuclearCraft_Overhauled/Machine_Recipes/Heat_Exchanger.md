# Wärmetauscher
**Hinweis: Teilweise kaputt**

## Paket wird importiert
`mods.nuclearcraft.Wärmetauscher`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.HeatExchanger.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, doppelte Hitzevoraussetzung, Int temperatureIn, Int temperatureOut);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.HeatExchanger.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.HeatExchanger.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.HeatExchanger.removeAllRezept();
```