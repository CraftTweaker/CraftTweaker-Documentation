# Grinder przemysłowy

## Importowanie pakietu
`[PLACEHOLDER] mods.techreborn.industrialGrinder`

## Dodawanie przepisów
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
mods. echreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, ILiquidStack fluid, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(składnik składnika);
mods.techreborn.industrialGrinder.removeRecipe(wyjście IItemStack);
mods.techreborn.industrialGrinder.removeAll();
```