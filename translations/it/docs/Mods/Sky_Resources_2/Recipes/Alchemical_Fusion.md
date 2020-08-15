# Alchemical Fusion

The *fusion* package is used for adding or removing recipes to/from the Alchemical Fusion process.

## Chiamata

You can call the *fusion* package using `mods.skyresources.fusion`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack output, IItemStack[] input, float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```