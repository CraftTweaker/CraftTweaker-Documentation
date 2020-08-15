# Irradiator

## Importowanie pakietu
`mods.nuclearcraft.irradiator`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.irradiator.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny Promieniowanie]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.irradiator.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.irradiator.removeRecipeWithOutput([fluidOutput1, fluidOutput2]);
mods.nuclearcraft.irradiator.removeAllRecipes();
```