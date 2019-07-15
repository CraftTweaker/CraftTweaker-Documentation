# Grinder

The Grinder is a machine that converts an input item into an output item using steam.

## Calling

You can call the Grinder package using `mods.steamagerevolution.Grinder`.

## Removing

This function removes the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `output`:

```java
mods.steamagerevolution.Grinder.removeRecipe(IItemStack output);

// Examples
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);
```

This function removes *all* recipes currently defined for the Grinder:

```java
mods.steamagerevolution.Grinder.removeAll();
```

## Adding

This function is used to add new recipes for the Grinder:

```java
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);

// Examples
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```
