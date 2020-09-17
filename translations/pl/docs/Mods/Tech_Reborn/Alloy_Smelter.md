# Stop hutniczy

## Importowanie pakietu
`mods.techreborn.alloySmelter`

## Dodawanie przepisów
```zenscript
mods.techreborn.alloySmelter.addRecipe(wyjście IItemStack input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(ISkładnik Składnikowy, ISkładnik ISkładnikaB);
mods.techreborn.alloySmelter.removeRecipe(wyjście IItemStack);
mods.techreborn.alloySmelter.removeAll();
```