# Cauldron Cleaning

The *cauldroncleaning* package is used for adding or removing recipes to/from the Cauldron.

## Chiamata

You can call the *cauldroncleaning* package using `mods.skyresources.cauldronclean`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack output);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```