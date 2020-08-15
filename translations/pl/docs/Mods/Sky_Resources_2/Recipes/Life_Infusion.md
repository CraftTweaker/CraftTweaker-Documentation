# Życie Infuzja

Pakiet *infuzyjny* jest używany do dodawania lub usuwania receptur do/z procesu infuzji.

## Dzwonienie

Możesz wywołać *infuzję* pakietem za pomocą `mods.skyresources.`

## Dodawanie przepisów

```zenscript
//mods.skyresources.infusion.addRecipe(wyjście IItemStack, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.infusion.removeRecipe(wyjście IItemStack);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```