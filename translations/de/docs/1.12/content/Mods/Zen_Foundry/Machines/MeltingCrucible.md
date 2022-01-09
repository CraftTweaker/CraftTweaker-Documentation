# Melting Crucibles

Machines that can melt items into liquids.

## Import
```zenscript
import mods.foundry.Melting;
```

## Methoden
```zenscript
// Adds a recipe with input ingredient, (optional) melting point in K, (optional) speed of the melting, and an output liquid to the melting crucibles
Melting.addRecipe(ILiquidStack output, IIngredient input, @Optional int meltingPoint, @Optional int speed);

// Removes a recipe with the given input item from the melting crucibles
Melting.removeRecipe(IItemStack input);

// Clears all recipes from the melting crucibles
Melting.clear();
```
