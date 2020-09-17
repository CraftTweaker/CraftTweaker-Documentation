# Reaktor syntezy jądrowej

## Importowanie pakietu
`[PLACEHOLDER] mods.techreborn.fusionReactor`

## Dodawanie przepisów
```zenscript
mods.techreborn.fusionReactor.addRecipe(Iponentowy topInput, IIngredient bottomInput, wyjście IItemStack, int startEU, int euTick, int tickTime);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(ISkładnik iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(wyjście IItemStack);
mods.techreborn.fusionReactor.removeAll();
```