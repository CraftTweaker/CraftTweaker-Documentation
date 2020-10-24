# Recipe Info

## Recipe Handlers
If you want to get the recipe handler associated with a recipe type, use `getRecipeHandler()`. For example, if you want toget the Solid Fuel Fission recipe handler, use `mods.nuclearcraft.SolidFission.getRecipeHandler()`.

## Recipe Handler Methods
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler::getItemOutputSize();
RecipeHandler::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## Recipe Methods
```zenscript
Recipe::getItemIngredient(int index);
Recipe::getFluidIngredient(int index);
Recipe::getItemProduct(int index);
Recipe::getFluidProduct(int index);
```