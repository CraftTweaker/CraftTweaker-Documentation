# Squeezer

The Squeezer package can be used to add/remove recipes to/from the Immersive Engineering Squeezer.

## Calling the package

You can call the Squeezer package using `mods.immersiveengineering.Squeezer`.

## Recipe addition

```
//mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

```

## Recipe removal
```
//mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack output);


//mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack output);


//mods.immersiveengineering.Squeezer.removeByInput(IItemStack input);

```