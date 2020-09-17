# Прозрачный флюс

## Пакет

`mods.thermalexpansion.Прозрачный`

## Сложение

```zenscript
//mods.thermalexpansion.Transposer.addExtractRecipe(ILiquidStack, IItemStack input, int energy);
//mods.thermalexpansion.Transposer. ddExtractRecipe(ILiquidStack), ввод IItemStack, внутренняя энергия, весомый элемент ItemStack);
mods.thermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:0>, 360);
модов. hermalexpansion.Transposer.addExtractRecipe(<liquid:water> * 250, <minecraft:leaves:1>, 360, <minecraft:leaves:0> % 30);



//mods.thermalexpansion.Transposer. ddFillRecipe(выход IItemStack, ввод IItemStack, жидкость ILiquidStack, внутренняя энергия);
mods.thermalexpansion.Transposer.addFillRecipe(<minecraft:leaves:1>, <minecraft:leaves:0>, <liquid:water> * 200, 20);


```

## Удаление

```zenscript
//mods.thermalexpansion.Transposer.removeExtractRecipe(IItemStack);
mods.thermalexpansion.Transposer.removeExtractRecipe(<minecraft:gold_ore>);


//mods.thermalexpansion.Transposer.removeFillRecipe(IItemStack input, ILiquidStack fluid);
mods.thermalexpansion.Transposer.removeFillRecipe(<minecraft:bucket>, <liquid:water>);
```