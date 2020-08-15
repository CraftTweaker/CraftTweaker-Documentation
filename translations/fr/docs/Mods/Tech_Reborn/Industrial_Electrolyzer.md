# Électrolyseur Industriel

## Importation du paquet en cours
`mods.techreborn.industrielElectrolyzer`

## Ajout de recettes
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient cells, IIngredient input2, int ticktime, int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialElectrolyzer.removeRecipe(IItemStack output);
mods.techreborn.industrialElectrolyzer.removeAll();
```