# Freezer

The *freezer* package is used for adding or removing recipes to/from the Freezer.

## Chiamata

You can call the *freezer* package using `mods.skyresources.freezer`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.freezer.addRecipe(IItemStack output, IItemStack input, int ticks);
mods.skyresources.freezer.addRecipe(<minecraft:ice>, <minecraft:dirt>, 900);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.freezer.removeRecipe(IItemStack output);
mods.skyresources.freezer.removeRecipe(<minecraft:ice>);
```