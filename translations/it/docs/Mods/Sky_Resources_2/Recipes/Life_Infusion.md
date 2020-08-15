# Life Infusion

The *infusion* package is used for adding or removing recipes to/from the Life Infusion process.

## Chiamata

You can call the *infusion* package using `mods.skyresources.infusion`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.infusion.addRecipe(IItemStack output, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.infusion.removeRecipe(IItemStack output);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```