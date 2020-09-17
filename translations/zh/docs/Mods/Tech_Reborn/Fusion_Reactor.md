# 聚合反应器

## 导入软件包
`mods.techreborn.fusionReactor`

## 添加配方
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IIngredient bownInput, IItemStack output, int startEU, int euTickk, int tickTime)；
```

## 删除配方
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(IItemStack output);
mods.techreborn.fusionReactor.reaveAll();
```