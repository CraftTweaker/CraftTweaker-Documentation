# Compressor

## Importing the Package
`mods.techreborn.compressor`

## Добавление рецептов
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, IIngredient input1, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.compressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.compressor.removeRecipe(IItemStack output);
mods.techreborn.compressor.removeAll();
```