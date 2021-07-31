# Mold Crafting Station

A machine that can create molds.

## Import
```zenscript
import mods.foundry.MoldStation;
```

## Methoden
```zenscript
// Adds a recipe with input grid, dimensions of the grid, and an output item/cast to the mold station
MoldStation.addRecipe(IItemStack output, int width, int height, int[] grid);

// Removes a recipe with the given grid from the mold station
MoldStation.removeRecipe(int[] grid);

// Removes a recipe with the given output item/cast from the mold station
MoldStation.removeRecipe(IItemStack output);

// Clears all recipes from the mold station
Casting.clear();
```
