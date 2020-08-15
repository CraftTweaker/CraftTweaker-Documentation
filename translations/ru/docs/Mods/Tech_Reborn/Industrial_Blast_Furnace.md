# Industrial Blast Furnace

## Importing the Package
`mods.techreborn.blastFurnace`

## Добавление рецептов
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int neededHeat);
```

## Удаление рецептов
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient ingredient);
mods.techreborn.blastFurnace.removeRecipe(IItemStack output);
mods.techreborn.blastFurnace.removeAll();
```