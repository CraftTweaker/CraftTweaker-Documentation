# Elektrolizator

## Importowanie pakietu
`Mods.nuclearcraft.electrolyzer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.electrolyser.addRecipe([fluidInput, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.electrolyser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.electrolyser.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.electrolyser.removeAllRecipes();
```