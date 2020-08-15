# Automat montażowy

## Importowanie pakietu
`mods.techreborn.assemblingMachine`

## Dodawanie przepisów
```zenscript
mods.techreborn.assemblingMachine.addRecipe(wyjście IItemStack input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.assemblingMachine.removeInputRecipe(ISkładnik Składnika, ISkładnik ISkładnikaB);
mods.techreborn.assemblingMachine.removeRecipe(wyjście IItemStack);
mods.techreborn.assemblingMachine.removeAll();
```