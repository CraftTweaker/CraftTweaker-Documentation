# Blacklist

The Blacklist package is used for adding/removing recipes from/to the melter Blacklist.

## Calling

You can call the Blacklist package using `mods.tcomplement.Blacklist`

## Blacklist entry addition

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack output, IItemStack input);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Blacklist entry removal

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack input);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```