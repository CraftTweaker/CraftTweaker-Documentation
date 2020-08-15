# Reprocesor paliwa

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.fuel_reprocessing`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.fuel_reprocessor.addRecipe([itemInput, itemOutput1, itemOutput2, itemOutput3, itemOutput4, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.fuel_reprocessor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.fuel_reprocessor.removeRecipeWithOutput([itemOutput1, itemOutput2, itemOutput3, itemOutput4]);
mods.nuclearcraft.fuel_reprocessor.removeAllRecipes();
```