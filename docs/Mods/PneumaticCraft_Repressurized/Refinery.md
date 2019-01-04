# Refinery

The Refinery is a multiblock structure which uses heat to convert an input fluid to two or more output fluids.  The multiblock consists of two to four (inclusive) refinery blocks, and the number of possible output fluids is limited by the number of refinery blocks in the structure.

Prior to PneumaticCraft: Repressurized v0.9.0, the minimum temperature for any Refinery recipe (i.e. the temperature at which procesing starts) was always 373K, or 100°C.  However, in v0.9.0 and later, it is possible to specify a minimum temperature when adding a Refinery recipe.

The Refinery will start processing fluids at the recipe's minimum temperature, and will work faster as the temperature rises.

Note that it's possible to have two or more recipes with the same input, as long as the number of outputs is different.  In this case, the recipe producing the most possible outputs (given the number of refinery blocks in the multiblock) will be used.

## Calling

You can call the Refinery package using `mods.pneumaticcraft.refinery`.

## Removing

This function removes the first recipe it finds which matches all of the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `outputs`:

```java
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] outputs);
```

This function removes the first recipe it finds which matches the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `input`:

```java
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
```

This function will remove *all* Refinery recipes:

```java
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## Adding

These functions add a new recipe to the Refinery:

```java
// Add a recipe with the default minimum temperature of 373K (100°C)
mods.pneumaticcraft.refinery.addRecipe(ILiquidStack input, ILiquidStack[] outputs);

// (v0.9.0+ required) Add a recipe with a given minimum temperature
mods.pneumaticcraft.refinery.addRecipe(int minimumTemperature, ILiquidStack input, ILiquidStack[] outputs);


// Example: both recipes use water as input
// First recipe will be used in a 2-block refinery
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// Second recipe will be used in a 3- or 4-block refinery,
// and also requires a minimum temperature of 473K, or 200°C
mods.pneumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```
