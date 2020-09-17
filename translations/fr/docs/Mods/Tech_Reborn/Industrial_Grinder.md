# Broyeur industriel

## Importation du paquet en cours
`broyeur industriel mods.techreborn.`

## Ajout de recettes
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
mods. echreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, ILiquidStack fluide, int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialGrinder.removeRecipe(IItemStack output);
mods.techreborn.industrialGrinder.removeAll();
```