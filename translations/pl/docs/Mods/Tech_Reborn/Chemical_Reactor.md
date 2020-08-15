# Chemical Reactor

## Importing the Package
`mods.techreborn.chemicalReactor`

## Dodawanie przepisów
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.chemicalReactor.removeRecipe(IItemStack output);
mods.techreborn.chemicalReactor.removeAll();
```