# Centrifuga

## Importazione del pacchetto
`mods.techreborn.centrifuge`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.centrifuge.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.centrifuge.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.centrifuge.removeRecipe(IItemStack output);
mods.techreborn.centrifuge.removeAll();
```