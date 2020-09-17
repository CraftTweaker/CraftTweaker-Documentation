# Reaktor chemiczny

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.chemical_reactor`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.chemical_reactor.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny przetwarzanie]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.chemical_reactor.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.chemical_reactor.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclearcraft.chemical_reactor.removeAllRecipes();
```