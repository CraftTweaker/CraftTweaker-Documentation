# Informations sur la recette

## Gestionnaires de recettes
Si vous voulez obtenir le gestionnaire de recettes associé à un type de recette, utilisez `getRecipeHandler()`. Par exemple, si vous voulez utiliser le gestionnaire de recettes Solid Fuel Fission, utilisez `mods.nuclearcraft.SolidFission.getRecipeHandler()`.

## Méthodes de gestion des recettes
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler::getItemOutputSize();
RecipeHandler::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## Méthodes de Recette
```zenscript
Recipe::getItemIngredient(int index);
Recipe::getFluidIngredient(int index);
Recipe::getItemProduct(int index);
Recipe::getFluidProduct(int index);
```