# Fornace Industriale Blast

## Importazione del pacchetto
`mods.techreborn.blastFurnace`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int necessarioRiscaldamento);
```

## Rimozione Ricette
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient ingredient);
mods.techreborn.blastFurnace.removeRecipe(IItemStack output);
mods.techreborn.blastFurnace.removeAll();
```