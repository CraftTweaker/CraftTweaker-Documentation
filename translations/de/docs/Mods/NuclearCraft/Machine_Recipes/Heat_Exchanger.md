# Wärmetauscher

## Paket wird importiert
`mods.nuclearcraft.heat_exchanger`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.heat_exchanger.addRecipe([fluidInput, fluidOutput, double heatRequired, int temperatureIn, int temperatureOut]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.heat_exchanger.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.heat_exchanger.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.heat_exchanger.removeAllRecipes();
```