# Suszenie

Pakiet `Susza` pozwala na dodanie lub usunięcie przepisów suszenia.

## Dzwonienie

Możesz nazwać pakiet suszenia używając `mods.tconstruct.Drying`

## Dodawanie

Czas jest w tickach

```zenscript
//mods.tconstruct.Drygin.addRecipe(wyjście IItemStack, Wejście IIngredient, czas int);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Usuwanie

```zenscript
//mods.tconstruct.Drying.removeRecipe(wyjście IItemStack);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(wyjście IItemStack, wejście IItemStack);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```