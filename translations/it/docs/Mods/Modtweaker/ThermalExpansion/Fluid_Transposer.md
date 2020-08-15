# Fluid_Transposer

## Pacchetto

`mods.thermalespansionion.Transposer`

## Addizione

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack output, IItemStack input, int energy);
//mods.thermalexpansion.Transposer. ddExtractRecipe(ILiquidStack output, IItemStack input, int energia, WeightedItemStack itemOut);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
mods. hermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30);



//mods.thermalexpansion.Transposer. ddFillRecipe(IItemStack output, IItemStack input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## Rimozione

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(IItemStack input);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(IItemStack input, ILiquidStack fluid);
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:bucket>, <liquid:water>);
```