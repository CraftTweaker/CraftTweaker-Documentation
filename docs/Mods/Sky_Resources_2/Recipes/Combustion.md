# Combustion
The *combustion* package is used for adding or removing recipes to/from the Combustion process.

## Calling
You can call the *combustion* package using `mods.skyresources.combustion`

## Recipe Addition

```
//mods.skyresources.combustion.addRecipe(IItemStack output, IItemStack[] input, int temperature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Recipe Removal

```
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```