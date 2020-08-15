# Transposer un fluide

## Paquet

`Transposer`

## Ajouter

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack, IItemStack input, int energy);
//mods.thermalexpansion.Transposer. ddExtractRecipe(ILiquidStack sortie, IItemStack entrée, int energy, WeightedItemStack itemOut);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
mods. hermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30 );



//mods.thermalexpansion.Transposer. ddFillRecipe(sortie IItemStack, entrée IItemStack, fluide ILiquidStack, int energy);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## Retirer

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(IItemStack input);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(IItemStack input, ILiquidStack fluid);
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:bucket>, <liquid:water>);
```