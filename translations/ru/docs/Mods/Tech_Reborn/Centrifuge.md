# Центрифуга

## Импортирование пакета
`mods.techreborn.centrifuge`

## Добавление рецептов
```zenscript
mods.techreborn.centri<unk> .addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, Igredient input1, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.centri<unk> .removeInputRecipe(IIngredient iIngredient);
mods.techreborn.centri<unk> .removeRecipe(выход IItemStack);
mods.techreborn.centri<unk> .removeAll();
```