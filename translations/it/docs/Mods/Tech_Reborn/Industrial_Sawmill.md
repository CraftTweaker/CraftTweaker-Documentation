# Segheria Industriale

## Importazione del pacchetto
`mods.techreborn.industrialSawmill`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick);
mods. echreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluido, int ticktime, int euTick, boolean useOreDic);
```

## Rimozione Ricette
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(IIngredient ingrediente);
mods.techreborn.industrialSawmill.removeRecipe(IItemStack output);
mods.techreborn.industrialSawmill.removeAll();
```