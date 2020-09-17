# Rozbijanie nóż

Pakiet *nóż* jest używany do dodawania lub usuwania przepisów z/z niszy cięcia.

## Dzwonienie

Możesz wywołać pakiet *nóż* używając `mods.skyresources.nfe`

## Dodawanie przepisów

```zenscript
//mods.skyresources.knife.addRecipe(wyjście IItemStack, wejście IItemStack);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```