# Combustion

The *combustion* package is used for adding or removing recipes to/from the Combustion process.

## Appel en cours

You can call the *combustion* package using `mods.skyresources.combustion`

## Recipe Addition

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack output, IItemStack[] input, int temperature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Recipe Removal

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```