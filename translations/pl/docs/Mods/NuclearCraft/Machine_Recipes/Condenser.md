# Kondensator

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.condenser`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.condenser.addRecipe([fluidInput, fluidOutput, @Opcjonalny podwójny chłodzenieWymagane, @Opcjonalny int condensingTemperature]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.condenser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.condenser.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.condenser.removeAllRecipes();
```