# Ładowarka

Pakiet Solderer jest używany do dodawania lub usuwania receptur do/z Soldere'a Rafinowanego Magazynu.

## Dzwonienie

Możesz wywołać pakiet Solderer używając `mods.refinedstorage.Solderer`

## Dodanie przepisu

Tablica wierszy **musi** mieć trzy! Użyj `null` jeśli potrzebujesz pustych stosów.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(wyjście IItemStack, czas int, IItemStack[] wiersze);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Usuwanie przepisów

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(wyjście IItemStack);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```