# Elektrolizator przemysłowy

## Importowanie pakietu
`[PLACEHOLDER] mods.techreborn.industrialElectrolyzer`

## Dodawanie przepisów
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(składnik składnika);
mods.techreborn.industrialElectrolyzer.removeRecipe(wyjście IItemStack);
mods.techreborn.industrialElectrolyzer.removeAll();
```