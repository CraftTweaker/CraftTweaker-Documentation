# Industrial Electrolyzer

## Importing the Package
`mods.techreborn.industrialElectrolyzer`

## Добавление рецептов
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient cells, IIngredient input2, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialElectrolyzer.removeRecipe(IItemStack output);
mods.techreborn.industrialElectrolyzer.removeAll();
```