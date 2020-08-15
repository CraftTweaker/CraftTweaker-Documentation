# Импульсирующий компрессор

## Импортирование пакета
`mods.techreborn.implosionCompressor`

## Добавление рецептов
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.implosionCompressor.removeRecipe(IItemStack);
mods.techreborn.implosionCompressor.removeAll();
```