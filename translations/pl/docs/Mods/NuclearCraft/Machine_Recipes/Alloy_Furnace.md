# Stop pieca

## Importowanie pakietu
`[PLACEHOLDER] mods.nuclearcraft.alloy_furnace`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.alloy_furnace.addRecipe([itemInput1, itemInput2, itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces]);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.alloy_furnace.removeRecipeWithInput([itemInput1, itemInput2]);
mods.nuclearcraft.alloy_furnace.removeRecipeWithOutput([itemOutput1]);
mods.nuclearcraft.alloy_furnace.removeAllRecipes();
```