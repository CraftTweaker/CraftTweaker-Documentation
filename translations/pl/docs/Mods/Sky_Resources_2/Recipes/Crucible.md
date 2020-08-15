# Tygiel

Pakiet *tygiel* jest używany do dodawania lub usuwania przepisów do/z tygielu.

## Dzwonienie

Możesz wywołać pakiet *tygiel* używając `mods.skyresources.tygiel`

## Dodawanie przepisów

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack output, IItemStack);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack output);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```