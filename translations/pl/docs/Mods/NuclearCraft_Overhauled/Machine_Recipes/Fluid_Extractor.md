# Ekstraktor płynny

## Importowanie pakietu
`mods.nuclearcraft.Wyciągający`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Extractor.addRecipe(IIngredient itemInput, IIngredient itemOutput, ILiquidStack fluidOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny Promieniowanie);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Extractor.removeRecipeWithInput(IInputIInput);
mods.nuclearcraft.Extractor.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.Ekstraktor.removeAllRecipes();
```