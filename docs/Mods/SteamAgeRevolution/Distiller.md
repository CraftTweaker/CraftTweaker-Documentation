# Distiller

The Distiller is a machine that converts an input fluid into an output fluid and item using steam.

## Calling

You can call the Distiller package using `mods.steamagerevolution.Distiller`.

## Removing

This function removes the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `outputStack` and [ILiquidStack](/Vanilla/Items/ILiquidStack/) `output`:

```java
mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output);

// Examples
mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);
```

This function removes *all* recipes currently defined for the Distiller:

```java
mods.steamagerevolution.Distiller.removeAll();
```

## Adding

This function is used to add new recipes for the Distiller:

```java
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack input, IItemStack outputStack, ILiquidStack output, int craftTime, int steamCost);

// Examples
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```