# Industriesägewerk

## Paket wird importiert
`mods.techreborn.industrialSägewerk`

## Rezepte hinzufügen
```zenscript
mods.techreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick);
mods. echreborn.industrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, int ticktime, int euTick, boolean useOreDic);
mods.techreborn. ndustrialSawmill.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IIngredient input1, ILiquidStack fluid, int ticktime, int euTick, boolean useOreDic);
```

## Rezepte entfernen
```zenscript
mods.techreborn.industrialSawmill.removeInputRecipe(IZutat);
mods.techreborn.industrialSawmill.removeRecipe(IItemStack output);
mods.techreborn.industrialSawmill.removeAll();
```