# Combustion

The *combustion* package is used for adding or removing recipes to/from the Combustion process.

## Chiamata

You can call the *combustion* package using `mods.skyresources.combustion`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack output, IItemStack[] input, int temperature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```