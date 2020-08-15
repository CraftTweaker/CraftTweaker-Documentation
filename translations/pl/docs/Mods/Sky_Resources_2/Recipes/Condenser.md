# Kondensator

Pakiet *skraplacza* jest używany do dodawania lub usuwania przepisów do/z kondensatora.

## Dzwonienie

Możesz wywołać pakiet *kondensatora* używając `mods.skyresources.condenser`

## Dodawanie przepisów

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack output, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack output);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```