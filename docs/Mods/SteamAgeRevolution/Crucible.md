# Crucible

The Crucible is a machine that converts an input item into an output fluid using steam.

## Calling

You can call the Crucible package using `mods.steamagerevolution.Crucible`.

## Removing

This function removes the first recipe they find with the given [ILiquidStack](/Vanilla/Items/ILiquidStack/) `output`:

```java
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack output);

// Examples
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);
```

This function removes *all* recipes currently defined for the Crucible:

```java
mods.steamagerevolution.Crucible.removeAll();
```

## Adding

This function is used to add new recipes for the Crucible:

```java
mods.steamagerevolution.Crucible.addRecipe(IIngredient input, ILiquidStack output, int craftTime, int steamCost);

// Examples
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```
