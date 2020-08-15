# Sztabka przeszła

## Importowanie pakietu
`mods.nuclearcraft.IngotFormer`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.IngotFormer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny podwójny nośnik, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.IngotFormer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.IngotFormer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.IngotFormer.removeAllRecipes();
```