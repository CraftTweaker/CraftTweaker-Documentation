# Compresseur

## Importation du paquet en cours
`mods.techreborn.compresseur`

## Ajout de recettes
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, IIngredient input1, int ticktime, int euTick);
```

## Suppression des recettes
```zenscript
mods.techreborn.compressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.compressor.removeRecipe(IItemStack output);
mods.techreborn.compressor.removeAll();
```