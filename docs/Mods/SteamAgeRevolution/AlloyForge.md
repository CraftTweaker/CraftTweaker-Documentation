# Alloy Forge

The Alloy Forge is a machine that converts two input fluids into one output fluid.

## Calling

You can call the Alloy Forge package using `mods.steamagerevolution.AlloyForge`.

## Removing

This function removes the first recipe they find with the given [ILiquidStack](/Vanilla/Items/ILiquidStack/) `output`:

```java
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack output);

// Examples
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);
```

This function removes *all* recipes currently defined for the Alloy Forge:

```java
mods.steamagerevolution.AlloyForge.removeAll();
```

## Adding

This function are used to add new recipes for the Alloy Forge:

```java
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack input, ILiquidStack input2, ILiquidStack output, int craftTime);

// Examples
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```
