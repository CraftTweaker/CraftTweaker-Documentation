# Stop hutniczy

## Importing the Package
`mods.techreborn.alloySmelter`

## Dodawanie przepisów
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```