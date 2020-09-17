# Kondensator

## Paket wird importiert
`mods.nuclearcraft.condenser`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.condenser.addRecipe([fluidInput, fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature]);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.condenser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.condenser.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.condenser.removeAllRecipes();
```