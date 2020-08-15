# Flüssigkeit_Transposer

## Paket

`mods.thermalexpansion.Transposer`

## Addition

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack Output, IItemStack Input, int Energie);
//mods.thermalexpansion.Transposer. ddExtractRecipe(ILiquidStack-Ausgabe, IItemStack-Eingabe, Intenenergie, Gewichtete ItemStack itemOut);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
Mods. hermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30);



//mods.thermalexpansion.Transposer. ddFillRecipe(IItemStack Ausgabe, IItemStack Eingabe, ILiquidStack Flüssigkeit, Int Energie);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## Entfernen

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(IItemStack input);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(IItemStack input, ILiquidStack fluid);
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:bucket>, <liquid:water>);
```