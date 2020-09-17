# Scierie industrielle

## Importation du paquet en cours
`Scierie industrielle mods.techreborn.industrielle`

## Ajout de recettes
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick);
mods. echreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int tictime, int euTick, boolean useOreDic);
```

## Suppression des recettes
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(IIngredient ingredient);
mods.techreborn.industrialSawmill.removeRecipe(IItemStack output);
mods.techreborn.industrialSawmill.removeAll();
```