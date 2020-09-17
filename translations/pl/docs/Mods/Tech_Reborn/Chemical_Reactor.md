# Reaktor chemiczny

## Importowanie pakietu
`[PLACEHOLDER] mods.techreborn.chemicalReactor`

## Dodawanie przepisów
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(Składnik składnika);
mods.techreborn.chemicalReactor.removeRecipe(wyjście IItemStack);
mods.techreborn.chemicalReactor.removeAll();
```