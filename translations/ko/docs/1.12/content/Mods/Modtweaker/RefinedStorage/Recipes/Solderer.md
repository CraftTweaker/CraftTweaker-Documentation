# Solderer (DEPRECATED)

NOTE: Solderer is deprecated and is removed in RefinedStorage 1.6. The class does not do anything in ModTweaker and exists purely as backwards compatibility.

The Solderer package is used for adding or removing recipes to/from the Refined Storage Solderer.

## Calling
You can call the Solderer package using `mods.refinedstorage.Solderer`

## Recipe addition

The Rows array **must** have a length of three! Use `null` if you need empty stacks.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(IItemStack output, int time, IItemStack[] rows);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Recipe removal

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(IItemStack output);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```
