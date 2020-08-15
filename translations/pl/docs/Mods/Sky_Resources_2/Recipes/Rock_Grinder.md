# Grinder skał

Pakiet *szlifierka rakietowa* jest używany do dodawania lub usuwania przepisów z/z szlifierki skałowej.

## Dzwonienie

Możesz wywołać pakiet *rockgrinder* używając `mods.skyresources.rockgrinder`

## Dodawanie przepisów

```zenscript
//mods.skyresources.rockgrinder.addRecipe(wyjście IItemStack, wejście IItemStack);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(wyjście IItemStack, IItemStack, wejście float, chance);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(wyjście IItemStack);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```