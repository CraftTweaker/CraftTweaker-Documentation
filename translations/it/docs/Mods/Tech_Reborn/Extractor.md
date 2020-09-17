# Estrattore

## Importazione del pacchetto
`mods.techreborn.extractor`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.extractor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```