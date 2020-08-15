# Wirówka

## Importowanie pakietu
`mods.techreborn.centrifuge`

## Dodawanie przepisów
```zenscript
mods.techreborn.centrifuge.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.centrifuge.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.centrifuge.removeRecipe(wyjście IItemStack);
mods.techreborn.centrifuge.removeAll();
```