# Metal Caster

A machine that can cast items from liquids and molds.

## Import
```zenscript
import mods.foundry.Casting;
```

## 方法
```zenscript
// Adds a recipe with input liquid, mold item, (optional) extra item (cannot be an oredict), (optional) time in ticks to cast the item, and an output item to the metal caster
Casting.addRecipe(IItemStack output, ILiquidStack input, IItemStack mold, @Optional IIngredient extra, @Optional int ticks, @Ootional boolean consumesMold);

// Removes a recipe with the given input liquid, mold, and optionally the extra item from the metal caster
Casting.removeRecipe(ILiquidStack input, IItemStack mold, @Optional IItemStack extra);

// Clears all recipes from the metal caster
Casting.clear();
```
