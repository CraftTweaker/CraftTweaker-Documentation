# Ex Sartagine: Requiem

A cooking mod with abilities to add and remove Pot, Pan, Smelter, and Kettle recipes.

## Import
```zenscript
import mods.exsartagine.ExSartagine;
```

## Placeable Blocks and Heat Sources
```zenscript
// Add a block that the Ex Sartagine blocks can be placed on
ExSartagine.addPlaceable(IBlockState placeableState);

// Remove a block that can be placed on
ExSartagine.removePlaceable(IBlockState placeableState);

// Add a block that counts as a heat source - will also add it to placeable list
ExSartagine.addHeatSource(IBlockState heatSource);

// Remove a block as a heat source
ExSartagine.removeHeatSource(IBlockState heatSource);
```

## Pot Recipes
```zenscript
// Add pot recipe with input and output
ExSartagine.addPotRecipe(IIngredient input, IItemStack output);

// Remove pot recipe by output
ExSartagine.removePotRecipe(IItemStack output);

// Remove pot recipe with input and output
ExSartagine.removePotRecipe(IIngredient input, IItemStack output);
```

## Pan Recipes
```zenscript
// Add pan recipe with input and output
ExSartagine.addPanRecipe(IIngredient input, IItemStack output);

// Remove pan recipe by output
ExSartagine.removePanRecipe(IItemStack output);

// Remove pan recipe with input and output
ExSartagine.removePanRecipe(IIngredient input, IItemStack output);
```

## Smelter Recipes
```zenscript
// Add smelter recipe with input and output
ExSartagine.addSmelterRecipe(IIngredient input, IItemStack output);

// Remove smelter recipe by output
ExSartagine.removeSmelterRecipe(IItemStack output);

// Remove smelter recipe with input and output
ExSartagine.removeSmelterRecipe(IIngredient input, IItemStack output);
```

## Kettle Recipes
```zenscript
// Add kettle recipe with inputs, catalyst, fluid, outputs, and optionally time
ExSartagine.addKettleRecipe(IIngredient[] inputs, @Nullable IIngredient catalyst, @Nullable ILiquidStack fluid, IItemStack[] outputs, @Optional int time);

// Remove kettle recipe if the output contains the given item
ExSartagine.removeKettleRecipe(IItemStack output);

// Remove kettle recipe if the output contains all of the given item list
ExSartagine.removeKettleRecipe(IItemStack[] outputs);

// Remove kettle recipe that matches the given arguments
// If time is omitted, any match for that argument is skipped
ExSartagine.removeKettleRecipe(IIngredient[] inputs, IIngredient catalyst, IItemStack[] outputs, @Optional int time);
ExSartagine.removeKettleRecipe(IIngredient[] inputs, IIngredient catalyst, ILiquidStack fluid, IItemStack[] outputs, @Optional int time);
```
