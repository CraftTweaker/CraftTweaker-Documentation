# Steelworks

The Steelworks is a machine that converts an input item and fluid into an output item using steam.

## Calling

You can call the Steelworks package using `mods.steamagerevolution.Steelworks`.

## Removing

This function removes the first recipe they find with the given [IItemStack](/Vanilla/Items/IItemStack/) `output`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack output);

// Examples
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

This function removes *all* recipes currently defined for the Steelworks:

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Adding

This function is used to add new recipes for the Steelworks:

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack input, IIngredient input2, IItemStack output, int craftTime, int steamCost);

// Examples
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200);
```
