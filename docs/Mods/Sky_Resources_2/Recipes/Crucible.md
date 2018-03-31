# Crucible
The *crucible* package is used for adding or removing recipes to/from the Crucible.

## Calling
You can call the *crucible* package using `mods.skyresources.crucible`

## Recipe Addition

```
//mods.skyresources.crucible.addRecipe(ILiquidStack output, IItemStack input);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## Recipe Removal

```
//mods.skyresources.crucible.removeRecipe(ILiquidStack output);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```