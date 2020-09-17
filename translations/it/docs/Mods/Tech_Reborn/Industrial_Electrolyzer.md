# Elettrolyzer Industriale

## Importazione del pacchetto
`mods.techreborn.industrialElectrolyzer`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.industrialElectrolyzer.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient cells, IIngredient input2, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.industrialElectrolyzer.removeInputRecipe(IIngredient ingrediente);
mods.techreborn.industrialElectrolyzer.removeRecipe(IItemStack output);
mods.techreborn.industrialElectrolyzer.removeAll();
```