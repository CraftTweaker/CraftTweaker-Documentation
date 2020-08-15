# Промышленная доменная печь

## Импортирование пакета
`mods.techreborn.blastFurnace`

## Добавление рецептов
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int neededHeat);
```

## Удаление рецептов
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient ingredient);
mods.techreborn.blastFurnace.removeRecipe(выход IItemStack);
mods.techreborn.blastFurnace.removeAll();
```