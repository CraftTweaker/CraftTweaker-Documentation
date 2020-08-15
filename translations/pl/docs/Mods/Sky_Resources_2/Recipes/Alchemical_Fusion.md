# Fuzja Alchemiczna

*fuzja* jest używana do dodawania lub usuwania przepisów do/z procesu syntezy alchemicznej.

## Dzwonienie

Możesz wywołać *fuzję* za pomocą `mods.skyresources.fusion`

## Dodawanie przepisów

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack output, IItemStack[] wejścia, katalizator float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```