# Kamień Kruszący

## Importowanie pakietu
`mods.nuclearcraft.RockCrusher`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.RockCrusher.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.RockCrusher.removeRecipeWithInput(ISkładnik itemInput);
mods.nuclearcraft.RockCrusher.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3);
mods.nuclearcraft.RockCrusher.removeAllRecipes();
```