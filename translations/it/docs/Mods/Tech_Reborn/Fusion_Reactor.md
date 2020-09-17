# Reattore Di Fusione

## Importazione del pacchetto
`mods.techreborn.fusionReactor`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.fusionReactor.addRecipe(IIngredient topInput, IIngredient bottomInput, IItemStack output, int startEU, int euTick, int tickTime);
```

## Rimozione Ricette
```zenscript
mods.techreborn.fusionReactor.removeTopInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeBottomInputRecipe(IIngredient iIngredient);
mods.techreborn.fusionReactor.removeRecipe(IItemStack output);
mods.techreborn.fusionReactor.removeAll();
```