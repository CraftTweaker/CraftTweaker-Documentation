# Piec przemysłowy

## Importowanie pakietu
`mods.techreborn.blastFurnace`

## Dodawanie przepisów
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int neededHeat);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(Składnik składnika);
mods.techreborn.blastFurnace.removeRecipe(wyjście IItemStack);
mods.techreborn.blastFurnace.removeAll();
```