# 配方信息

## 配方处理
如果您想要获得与配方类型关联的配方处理程序，请使用 `getRecipehandler()`。 例如，如果你想同时使用固体燃料裂变处理器，请使用 `mods.nuclearcraft。SolidFission.getRecipehandler()`.

## 配方处理方法
```zenscript
RecipeHandler:::getRecipepeName();
Recipehandler:::getRecipeList();

Recipehandler::getItemInputSize();
Recipehandler::getFluidInputSize();
Recipehandler:::getItemOutputSize();
Recipehandler::getFluidOutputSize();
Recipehandler:::isShapeless();
```

## 配方方法
```zenscript
累积::getItemIngredient(int index);
累积::getFluidIngredient(int index);
累积::getItItemProduct(int index);
累积::getFluidProduct(int index);
```