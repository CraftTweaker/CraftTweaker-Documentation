# Fusion Reactor

## Importing the Package
`mods.techreborn.fusionReactor`

## 添加配方
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IIngredient bottomInput, IItemStack output, int startEU, int euTick, int tickTime);
```

## 删除配方
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(IItemStack output);
mods.techreborn.fusionReactor.removeAll();
```