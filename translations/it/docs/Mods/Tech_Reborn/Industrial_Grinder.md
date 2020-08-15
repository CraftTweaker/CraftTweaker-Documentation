# Smerigliatrice Industriale

## Importazione del pacchetto
`mods.techreborn.industrialGrinder`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
mods. echreborn.industrialGrinder.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, ILiquidStack fluid, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.industrialGrinder.removeInputRecipe(IIngredient ingrediente);
mods.techreborn.industrialGrinder.removeRecipe(IItemStack output);
mods.techreborn.industrialGrinder.removeAll();
```