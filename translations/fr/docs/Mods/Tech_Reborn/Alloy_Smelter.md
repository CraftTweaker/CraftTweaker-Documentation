# Fonderie d'Alliage

## Importation du paquet en cours
`mods.techreborn.alloySmelter`

## Ajout de recettes
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack sortie, IIngredient input1, IIngredient input2, int euTick) ;
```

## Suppression des recettes
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```