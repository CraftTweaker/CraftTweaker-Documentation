# Płynny Enricher

## Importowanie pakietu
`Rozpakuj`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.dissolver.addRecipe([itemInput, fluidInput, fluidOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.dissolver.removeRecipeWithInput([itemInput, fluidInput]);
mods.nuclearcraft.dissolver.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.dissolver.removeAllRecipes();
```