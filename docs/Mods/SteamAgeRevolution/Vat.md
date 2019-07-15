# Vat

The Vat is a machine that converts input items and fluids into an output fluid.

## Calling

You can call the Vat package using `mods.steamagerevolution.Vat`.

## Removing

This function removes the first recipe they find with the given [ILiquidStack](/Vanilla/Items/ILiquidStack/) `output`:

```java
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack output);

// Examples
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);
```

This function removes *all* recipes currently defined for the Vat:

```java
mods.steamagerevolution.Vat.removeAll();
```

## Adding

This function is used to add new recipes for the Vat:

```java
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] input, IIngredient[] inputItems, ILiquidStack output, int craftTime);

// Examples
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```
