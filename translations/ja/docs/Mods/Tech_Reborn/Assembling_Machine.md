# Assembling Machine

## Importing the Package
`mods.techreborn.assemblingMachine`

## レシピを追加中
```zenscript
mods.techreborn.assemblingMachine.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## レシピを削除
```zenscript
mods.techreborn.assemblingMachine.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.assemblingMachine.removeRecipe(IItemStack output);
mods.techreborn.assemblingMachine.removeAll();
```