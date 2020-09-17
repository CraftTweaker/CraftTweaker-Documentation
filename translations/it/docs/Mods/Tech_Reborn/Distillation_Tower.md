# Torre Di Distillazione

## Importazione del pacchetto
`mods.techreborn.distillationTower`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.distillationTower.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.distillationTower.removeInputRecipe(IIngredient ingrediente);
mods.techreborn.distillationTower.removeRecipe(IItemStack output);
mods.techreborn.distillationTower.removeAll();
```