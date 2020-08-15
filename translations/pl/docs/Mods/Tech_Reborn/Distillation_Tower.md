# Wieża destylacyjna

## Importowanie pakietu
`[PLACEHOLDER] mods.techreborn.distillationTower`

## Dodawanie przepisów
```zenscript
mods.techreborn.distationTower.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.distationTower.removeInputRecipe(Składnik składnika);
mods.techreborn.distillationTower.removeRecipe(wyjście IItemStack);
mods.techreborn.distationTower.removeAll();
```