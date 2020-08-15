# Grinder

## Importowanie pakietu
`mods.techreborn.grinder`

## Dodawanie przepisów
```zenscript
mods.techreborn.grinder.addRecipe(wyjście IItemStack, IIngredient input1, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.grinder.removeInputRecipe(Składnik składnika);
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```