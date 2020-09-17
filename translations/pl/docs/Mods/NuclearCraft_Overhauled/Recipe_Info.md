# Informacje o recepturze

## Uchwyty receptury
Jeśli chcesz uzyskać uchwyt receptury powiązany z typem receptury, użyj `getRecipeHandler()`. Na przykład, jeśli chcesz mieć przepis na rozszczepienie paliwa stałego, użyj `mods.nuclearcraft.SolidFission.getRecipeHandler()`.

## Metody obsługi przepisów
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler:::getItemOutputSize();
RecipeHandler:::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## Metody przepisów
```zenscript
Przepis::getItemIngredient(int index);
Przepis::getFluidIngredient(int index);
Przepis:::getItemProduct(int index);
Przepis::getFluidProduct(int index);
```