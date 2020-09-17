# Nadpisywanie

Pakiet nadpisujący jest używany do dodawania/usuwania przepisów z/do nadpisywania stopni.

## Dzwonienie

Możesz wywołać pakiet nadpisywania za pomocą `mods.tcomplement.Overrides`

## Nadpisuje dodanie wpisu

```zenscript
//mods.tcomplement.Overrides.addRecipe(ILiquidStack wyjście wejściowe, IItemStack, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## Nadpisuje usunięcie wpisu

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack, @Optional IItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```