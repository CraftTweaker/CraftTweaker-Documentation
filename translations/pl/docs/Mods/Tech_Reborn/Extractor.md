# Wyciągający

## Importowanie pakietu
`mods.techreborn.extractor`

## Dodawanie przepisów
```zenscript
mods.techreborn.extractor.addRecipe(wyjście IItemStack input1, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.extractor.removeInputRecipe(Składnik składnika);
mods.techreborn.extractor.removeRecipe(wyjście IItemStack);
mods.techreborn.extractor.removeAll();
```