# Rock Grinder

The *rockgrinder* package is used for adding or removing recipes to/from the Rock Grinder.

## Chiamata

You can call the *rockgrinder* package using `mods.skyresources.rockgrinder`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack output);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```