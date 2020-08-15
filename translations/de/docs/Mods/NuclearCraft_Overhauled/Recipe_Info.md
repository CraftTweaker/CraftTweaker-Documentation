# Rezept-Info

## Rezept-Handler
Wenn Sie den Rezept-Handler mit einem Rezepttyp verknüpfen möchten, verwenden Sie `getRecipeHandler()`. Wenn Sie zum Beispiel den Handler für Festbrennstoffspaltung, verwenden Sie `mods.nuclearcraft.SolidFission.getRecipeHandler()`.

## Rezept-Handler-Methoden
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler::getItemOutputSize();
RecipeHandler::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## Rezept-Methoden
```zenscript
Recipe::getItemIngredient(int index);
Recipe::getFluidIngredient(int index);
Recipe::getItemProduct(int index);
Recipe::getFluidProduct(int index);
```