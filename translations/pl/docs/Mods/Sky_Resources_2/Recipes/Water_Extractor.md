# Wydobycie wody

Pakiet *waterextractor* jest używany do dodawania lub usuwania receptury do/z procesu wyciągania wody i ekstrakcji.

## Dzwonienie

Możesz wywołać pakiet *waterextractor* używając `mods.skyresources.waterextractor`

## Dodawanie przepisów

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods. zasoby kyresources.waterextractor.insert.addRecipe(wyjście IItemStack, Wejście IIngredient, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## Usuwanie przepisów

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterOut, wyjścia IItemStack, IInput);
mods.skyresources.waterextractor.extract.removeRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.insert.removeRecipe(wyjście IItemStack);
mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);
```