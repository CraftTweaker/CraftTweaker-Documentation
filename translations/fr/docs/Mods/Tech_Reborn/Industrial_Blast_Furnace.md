# Fournaise Industrielle Explosive

## Importation du paquet en cours
`mods.techreborn.blastFurnace`

## Ajout de recettes
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int neededHeat);
```

## Suppression des recettes
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient ingredient);
mods.techreborn.blastFurnace.removeRecipe(IItemStack output);
mods.techreborn.blastFurnace.removeAll();
```