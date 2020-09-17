# Isotope Separator

## Importowanie pakietu
`mods.nuclearcraft.Separator`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Separator.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Separator.removeRecipeWithInput(ISkładnik itemInput);
mods.nuclearcraft.Separator.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2);
mods.nuclearcraft.Separator.removeAllRecipes();
```