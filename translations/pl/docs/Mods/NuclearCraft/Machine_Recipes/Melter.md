# Wytopiony

## Importowanie pakietu
`Mods.nuclearcraft.melter`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.melter.addRecipe([itemInput, fluidOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces, Radiation]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.melter.removeRecipeWithInput([itemInput]);
mods.nuclearcraft.melter.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.melter.removeAllRecipes();
```