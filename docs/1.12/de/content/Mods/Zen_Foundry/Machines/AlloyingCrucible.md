# Alloying Crucible

A machine that can mix up to two liquids to produce one fluid output.

## Import
```zenscript
import mods.foundry.AlloyingCrucible;
```

## Methoden
```zenscript
// Adds a recipe with input liquids and an output liquid to the alloying crucible
AlloyingCrucible.addRecipe(ILiquidStack output, ILiquidStack input_a, ILiquidStack input_b);

// Removes a recipe with the given inputs from the alloying crucible
AlloyingCrucible.removeRecipe(ILiquidStack input_a, ILiquidStack input_b);

// Clears all recipes from the alloying crucible
AlloyingCrucible.clear();
```
