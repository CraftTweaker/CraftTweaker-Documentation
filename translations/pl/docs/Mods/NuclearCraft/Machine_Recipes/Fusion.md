# Fuzja

## Importowanie pakietu
`mods.nuclearcraft.fuzja`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.fusion.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, double comboTime, double comboPower, double comboHeatVar, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.fusion.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.fusion.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.fusion.removeAllRecipes();
```