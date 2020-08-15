# Металлургический сплав

## Importing the Package
`mods.techreborn.alloySmelter`

## Добавление рецептов
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```