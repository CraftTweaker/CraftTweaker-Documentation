# Cutting Knife

The *knife* package is used for adding or removing recipes to/from the Cutting Knife.

## Chiamata

You can call the *knife* package using `mods.skyresources.knife`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.knife.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack output);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```