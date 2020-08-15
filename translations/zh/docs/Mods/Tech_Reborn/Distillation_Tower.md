# Distillation Tower

## Importing the Package
`mods.techreborn.distillationTower`

## 添加配方
```zenscript
mods.techreborn.distillationTower.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## 删除配方
```zenscript
mods.techreborn.distillationTower.removeInputRecipe(IIngredient ingredient);
mods.techreborn.distillationTower.removeRecipe(IItemStack output);
mods.techreborn.distillationTower.removeAll();
```