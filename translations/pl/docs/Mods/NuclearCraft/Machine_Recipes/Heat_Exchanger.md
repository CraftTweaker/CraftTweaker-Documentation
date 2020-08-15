# Wymiennik ciepła

## Importowanie pakietu
`Mods.nuclearcraft.heat_exchange`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.heat_exchanger.addRecipe([fluidInput, fluidOutput, podwójne ogrzewanie wymagane, temperatura int In, temperatura int Out]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.heat_exchanger.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.heat_exchanger.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.heat_exchanger.removeAllRecipes();
```