# Ekstraktor płynny

## Importowanie pakietu
`Mods.nuclearcraft.extractor`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.extractor.addRecipe([itemInput, itemOutput, fluidOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny przetwarzanie]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.extractor.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.extractor.removeRecipeWithOutput([itemOutput, fluidOutput]);
mods.nuclearcraft.extractor.removeAllRecipes();
```