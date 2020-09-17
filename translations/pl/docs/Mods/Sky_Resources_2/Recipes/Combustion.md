# Spalanie

Pakiet *spalania* jest używany do dodawania lub usuwania przepisów do/z procesu spalania.

## Dzwonienie

Możesz wywołać *spalanie* pakietu za pomocą `mods.skyresources.combustion`

## Dodawanie przepisów

```zenscript
//mods.skyresources.combustion.addRecipe(wyjście IItemStack, IItemStack[] wejścia, temperatura int);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.combustion.removeRecipe(wyjście IItemStack);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```