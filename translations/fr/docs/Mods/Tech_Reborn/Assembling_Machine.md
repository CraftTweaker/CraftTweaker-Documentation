# Machine d'assemblage

## Importation du paquet en cours
`Machine d'assemblage mods.techreborn.`

## Ajout de recettes
```zenscript
mods.techreborn.assemblingMachine.addRecipe(sortie IItemStack, IIngredient input1, IIngredient input2, int euTick) ;
```

## Suppression des recettes
```zenscript
mods.techreborn.assemblingMachine.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.assemblingMachine.removeRecipe(IItemStack output);
mods.techreborn.assemblingMachine.removeAll();
```