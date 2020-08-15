# Réacteur chimique

## Importation du paquet en cours
`mods.techreborn.chemicalReactor`

## Ajout de recettes
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int euTick) ;
```

## Suppression des recettes
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.chemicalReactor.removeRecipe(IItemStack output);
mods.techreborn.chemicalReactor.removeAll();
```