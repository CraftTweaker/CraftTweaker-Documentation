# Steam Hammer

The Steam Hammer is a machine that converts two input items into an output item using steam.

## Calling

You can call the Steam Hammer package using `mods.steamagerevolution.SteamHammer`.

## Removing

This function removes the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `output`:

```java
mods.steamagerevolution.SteamHammer.removeRecipe(IItemStack output);

// Examples
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);
```

This function removes *all* recipes currently defined for the Steam Hammer:

```java
mods.steamagerevolution.SteamHammer.removeAll();
```

## Adding

This function is used to add new recipes for the Steam Hammer:

```java
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient input, IIngredient input2, IItemStack output, int craftTime, int steamCost);

// Examples
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```
