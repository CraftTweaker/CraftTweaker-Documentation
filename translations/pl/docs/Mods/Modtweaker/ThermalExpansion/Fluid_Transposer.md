# Płynny_Transpozytor

## Pakiet

`Transpozytor`

## Dodanie

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack, IItemStack input, int energy);
//mods.thermalexpansion.Transposer. ddExtractRecipe(ILiquidStack wyjście, IItemStack wejście, int Energy, WeightedItemStack itemOut);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
mody. hermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30);



//mods.thermalexpansion.Transposer. ddFillRecipe(wyjście IItemStack, wejście IItemStack, płyn ILiquidStack, energia int);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## Usuwanie

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(wejście IItemStack);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(wejście IItemStack, płynna ILiquidStack);
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:bucket>, <liquid:water>);
```