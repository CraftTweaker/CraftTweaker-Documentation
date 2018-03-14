# Life Infusion
The *infusion* package is used for adding or removing recipes to/from the Life Infusion process.

## Calling
You can call the *infusion* package using `mods.skyresources.infusion`

## Recipe Addition

```
//mods.skyresources.infusion.addRecipe(IItemStack output, IItemStack inputStack, IItemStack inputBlock, int health);
mods.skyresources.infusion.addRecipe(<minecraft:diamond> * 8, <minecraft:nether_star>, <minecraft:dirt>, 14);
```

## Recipe Removal

```
//mods.skyresources.infusion.removeRecipe(IItemStack output);
mods.skyresources.infusion.removeRecipe(<minecraft:cactus>);
```