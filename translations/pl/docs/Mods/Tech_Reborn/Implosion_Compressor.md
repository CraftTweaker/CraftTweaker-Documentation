# Kompresor implozji

## Importowanie pakietu
`mods.techreborn.implosionCompressor`

## Dodawanie przepisów
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(składnik składnika);
mods.techreborn.implosionCompressor.removeRecipe(wyjście IItemStack);
mods.techreborn.implosionCompressor.removeAll();
```