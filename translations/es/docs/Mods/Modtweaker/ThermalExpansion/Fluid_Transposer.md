# Transposer fluido

## Paquete

`mods.thermalexpansion.Transposer`

## Adicional

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(salida ILiquidStack, entrada ItemStack, energía de int);
//mods.thermalexpansion.Transposer. ddExtractRecipe(salida ILiquidStack, entrada IItemStack, energía int, elemento WeightedItemStack);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
mods. hermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30);



//mods.thermalexpansion.Transposer. ddFillRecipe(Salida ItemStack, entrada de ItemStack, fluido de ILiquidStack);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## Eliminar

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(ItemStack input);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(IItemStack input, ILiquidStack fluid);
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:bucket>, <liquid:water>);
```