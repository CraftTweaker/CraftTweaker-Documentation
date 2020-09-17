# Réacteur de fusion

## Importation du paquet en cours
`mods.techreborn.fusionReactor`

## Ajout de recettes
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IIngredient bottomInput, IItemStack, int startEU, int euTick, int tickTime);
```

## Suppression des recettes
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(IItemStack output);
mods.techreborn.fusionReactor.removeAll();
```