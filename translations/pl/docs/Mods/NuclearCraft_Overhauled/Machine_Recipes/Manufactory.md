# Ręczna fabryka

## Importowanie pakietu
`mods.nuclearcraft.Ręczna fabryka`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Manufactory.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Opcjonalny podwójny timeMultiplier, @Opcjonalny mnożnik podwójnej mocy, @Opcjonalny podwójny proces);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Manufactory.removeRecipeWithInput(IInputIInput);
mods.nuclearcraft.Manufactory.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Manufactory.removeAllRecipes();
```