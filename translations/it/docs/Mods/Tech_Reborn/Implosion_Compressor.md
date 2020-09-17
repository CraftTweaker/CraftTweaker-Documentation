# Compressore Di Implosione

## Importazione del pacchetto
`mods.techreborn.implosionCompressore`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.implosionCompressor.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.implosionCompressor.removeInputRecipe(IIngredient ingrediente);
mods.techreborn.implosionCompressor.removeRecipe(IItemStack output);
mods.techreborn.implosionCompressor.removeAll();
```