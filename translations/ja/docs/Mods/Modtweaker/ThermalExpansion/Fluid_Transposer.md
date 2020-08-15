# Fluid_Transposer

## パッケージ

`mods.thermalexpansion.Transposer`

## 加算

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack output, IItemStack input, int energy);
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack output, IItemStack input, int energy, WeightedItemStack itemOut);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30);



//mods.thermalexpansion.Transposer.addFillRecipe(IItemStack output, IItemStack input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## 削除

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(IItemStack input);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(IItemStack input, ILiquidStack fluid);
mods.thermalexpansion.Transposer.removeFillRepipe(<minecraft:bucket>, <liquid:water>);
```