# Tartak przemysłowy

## Importowanie pakietu
`[PLACEHOLDER] mods.techreborn.industrialTawmll`

## Dodawanie przepisów
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick);
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick, boolean useOreDic);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(składnik składnika);
mods.techreborn.industrialSawmill.removeRecipe(wyjście IItemStack);
mods.techreborn.industrialSawmill.removeAll();
```