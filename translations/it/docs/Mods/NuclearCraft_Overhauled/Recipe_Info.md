# Informazioni Ricetta

## Gestori Ricette
Se vuoi ottenere il gestore delle ricette associato a un tipo di ricetta, usa `getRecipeHandler()`. Per esempio, se si desidera attivare il gestore della ricetta Fissione Carburante Solid, utilizzare `mods.nuclearcraft.SolidFission.getRecipeHandler()`.

## Metodi Gestore Ricette
```zenscript
RecipeHandler::getRecipeName();
RecipeHandler::getRecipeList();

RecipeHandler::getItemInputSize();
RecipeHandler::getFluidInputSize();
RecipeHandler::getItemOutputSize();
RecipeHandler::getFluidOutputSize();
RecipeHandler::isShapeless();
```

## Metodi Di Ricetta
```zenscript
Recipe::getItemIngredient(int index);
Recipe::getFluidIngredient(int index);
Recipe::getItemProduct(int index);
Recipe::getFluidProduct(int index);
```