# Compresseur d'implosion

## Importation du paquet en cours
`mods.techreborn.implosionCompressor`

## Ajout de recettes
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.implosionCompressor.removeRecipe(IItemStack output);
mods.techreborn.implosionCompressor.removeAll();
```