# Kryształowa

## Importowanie pakietu
`Mods.nuclearcraft.krystalizator`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.crystallizer.addRecipe([fluidInput, itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny przetwarzanie]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.crystallizer.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.crystallizer.removeRecipeWithOutput([itemOutput]);
mods.nuclearcraft.crystallizer.removeAllRecipes();
```