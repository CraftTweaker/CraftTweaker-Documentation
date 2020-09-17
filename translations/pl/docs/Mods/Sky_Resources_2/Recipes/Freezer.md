# Zamrażarka

Pakiet *zamrażarki* jest używany do dodawania lub usuwania przepisów do/z zamrażarki.

## Dzwonienie

Możesz wywołać pakiet *zamrażarka* używając `mods.skyresources.zamrażarka`

## Dodawanie przepisów

```zenscript
//mods.skyresources.zamrażar.addRecipe(wyjście IItemStack, wejście IItemStack, ticks);
mods.skyresources.zamrażar.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.zamrażar.removeRecipe(wyjście IItemStack);
mods.skyresources.zamrażar.removeRecipe(<minecraft:ice>);
```