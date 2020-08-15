# Assembling Machine

## Importing the Package
`mods.techreborn.assemblingMachine`

## 添加配方
```zenscript
mods.techreborn.assemblingMachine.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## 删除配方
```zenscript
mods.techreborn.assemblingMachine.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.assemblingMachine.removeRecipe(IItemStack output);
mods.techreborn.assemblingMachine.removeAll();
```