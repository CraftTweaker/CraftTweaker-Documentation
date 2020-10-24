# Implosion Compressor

## Importing the Package
`mods.techreborn.implosionCompressor`

## Adding Recipes
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Removing Recipes
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.implosionCompressor.removeRecipe(IItemStack output);
mods.techreborn.implosionCompressor.removeAll();
```