# レシピ情報

## レシピ・ハンドラー
レシピタイプに関連付けられたレシピハンドラを取得したい場合は、 `getRecipeHandler()` を使用してください。 For example, if you want toget the Solid Fuel Fission recipe handler, use `mods.nuclearcraft.SolidFission.getRecipeHandler()`.SolidFission.getRecipeHandler()</code>.

## レシピハンドラのメソッド
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler::getItemOutputSize();
RecipeHandler::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## レシピメソッド
```zenscript
Recipe::getItemIngredient(int index);
Recipe::getFluidIngredient(int index);
Recipe::getItemProduct(int index);
Recipe::getFluidProduct(int index);
```