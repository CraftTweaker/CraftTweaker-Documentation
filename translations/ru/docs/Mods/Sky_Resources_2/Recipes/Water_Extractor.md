# Водяной экстрактор

The *waterextractor* package is used for adding or removing recipes to/from the Water Extractor Insert and Extract process.

## Звонок

You can call the *waterextractor* package using `mods.skyresources.waterextractor`

## Добавление рецепта

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack, IIngredient input);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//моды. kyresources.waterextractor.insert.addRecipe(IItemStack, IIngredient input, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## Удаление рецепта

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterOut, IItemStack, IIngredient input);
mods.skyresources.waterextractor.extract.removeRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.insert.removeRecipe(IItemStack output);
mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);
```