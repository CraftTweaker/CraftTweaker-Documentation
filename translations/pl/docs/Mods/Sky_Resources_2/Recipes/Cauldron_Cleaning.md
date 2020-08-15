# Czyszczenie kocioła

Pakiet *kocioł* jest używany do dodawania lub usuwania przepisów do/z kociołu.

## Dzwonienie

Możesz wywołać pakiet *kocioł* używając `mods.skyresources.cauldronclean`

## Dodawanie przepisów

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(wyjście IItemStack);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```