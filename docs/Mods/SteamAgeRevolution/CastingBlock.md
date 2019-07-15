# Casting Block

The Casting Block is a machine that converts an input fluid into an output item.

## Calling

You can call the Casting Block package using `mods.steamagerevolution.CastingBlock`.

## Removing

This function removes the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `output`:

```java
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack output);

// Examples
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);
```

This function removes *all* recipes currently defined for the Casting Block:

```java
mods.steamagerevolution.CastingBlock.removeAll();
```

## Adding

This function is used to add new recipes for the Casting Block:

```java
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack input, IItemStack output, int craftTime);

// Examples
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```
