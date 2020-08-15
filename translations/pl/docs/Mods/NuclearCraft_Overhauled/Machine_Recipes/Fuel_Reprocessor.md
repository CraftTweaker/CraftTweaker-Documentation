# Reprocesor paliwa

## Importowanie pakietu
`mods.nuclearcraft.Reaktor paliwowy`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.FuelReprocessor.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient temOutput4, @Opcjonalny podwójny timeMnożnik, @Opcjonalny podwójny proces, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.FuelReprocessor.removeRecipeWithInput(IInput(ISkładnik itemInput);
mods.nuclearcraft.FuelReprocessor.removeRecipeWithOutput(IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, IIngredient itemOutput4);
mods.nuclearcraft.Paliwo Reprocessor.removeAllRecipes();
```