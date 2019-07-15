# Steam Furnace

The Steam Furnace is a machine that converts an input item into an output item using steam.

## Calling

You can call the Steam Furnace package using `mods.steamagerevolution.SteamFurnace`.

## Removing

This function removes the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `output`:

```java
mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output);

// Examples
mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);
```

This function removes *all* recipes currently defined for the Steam Furnace:

```java
mods.steamagerevolution.SteamFurnace.removeAll();
```

## Adding

This function is used to add new recipes for the Steam Furnace:

```java
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);

// Examples
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```
