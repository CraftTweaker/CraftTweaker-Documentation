# Info Receta

## Manejadores de recetas
Si desea obtener el manejador de recetas asociado con un tipo de receta, utilice `getRecipeHandler()`. For example, if you want toget the Solid Fuel Fission recipe handler, use `mods.nuclearcraft.SolidFission.getRecipeHandler()`.SolidFission.getRecipeHandler()</code>.

## Métodos de Manejo de Receta
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler::getItemOutputSize();
RecipeHandler::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## Métodos de Receta
```zenscript
Recipe::getItemIngredient(int index);
Recipe::getFluidIngredient(int index);
Recipe::getItemProduct(int index);
Recipe::getFluidProduct(int index);
```