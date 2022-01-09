# Casting Table

A "machine" that can cast blocks, ingots, plates, or rods from liquids.

## Import
```zenscript
import mods.foundry.CastingTable;
```

## Methoden
Replace `X` with `Block`, `Ingot`, `Plate`, or `Rod` depending on the type of casting table you want to manipulate.
```zenscript
// Adds a recipe with input liquid and output item to the specified casting table type
CastingTable.addXRecipe(IItemStack output, ILiquidStack input);

// Removes a recipe with input liquid from the specified casting table type
CastingTable.removeXRecipe(ILiquidStack input);

// Clears all recipes from the specified casting table type
CastingTable.clearXs();

// Clears all recipes from all casting table types
CastingTable.clearAll();
```
