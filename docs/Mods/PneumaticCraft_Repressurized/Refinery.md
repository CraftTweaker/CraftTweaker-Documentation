# Refinery

The Refinery is a multiblock structure which uses heat to convert an input fluid to two or more output fluids.  The multiblock consists of two to four (inclusive) refinery blocks, and the number of possible output fluids is limited by the number of refinery blocks in the structure.

Heat value is not part of the recipe; the refinery will start to process fluids at any temperature >= 100°C, but will work faster as the temperature rises.

Note that it's possible to have two or more recipes with the same input, as long as the number of outputs is different.  In this case, the recipe producing the most possible outputs (given the number of refinery blocks) will be used.

## Calling

You can call the Refinery package using `mods.pneumaticcraft.refinery`.

## Removing

This function removes the first recipe it finds matching all of the given [IIngredient](/Vanilla/Variable_Types/IIngredient) `outputs`:

```java
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] outputs);
```

This function removes the first recipe it finds matching the given [IIngredient](/Vanilla/Variable_Types/IIngredient) `input`:

```java
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
```

## Adding

This function adds a new recipe to the Refinery:

```java
mods.pneumaticcraft.refinery.addRecipe(ILiquidStack input, ILiquidStack[] outputs);

// Example
// Both recipes use water as input
// First recipe will be used in a 2-block refinery
// Second recipe will be used in a 3- or 4-block refinery
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```
