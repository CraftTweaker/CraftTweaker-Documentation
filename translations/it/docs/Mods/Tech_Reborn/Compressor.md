# Compressore

## Importazione del pacchetto
`mods.techreborn.compressor`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.compressor.addRecipe(IItemStack output1, IIngredient input1, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.compressor.removeInputRecipe(IIngredient ingrediente);
mods.techreborn.compressor.removeRecipe(IItemStack output);
mods.techreborn.compressor.removeAll();
```