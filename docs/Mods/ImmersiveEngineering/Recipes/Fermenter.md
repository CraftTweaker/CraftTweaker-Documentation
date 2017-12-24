# Fermenter

The Fermenter package can be used to add/remove recipes to/from the Immersive Engineering Fermenter.

## Calling the package

You can call the Fermenter package using `mods.immersiveengineering.Fermenter`.

## Recipe addition

```
//mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

```

## Recipe removal
```
//mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);


//mods.immersiveengineering.Fermenter.removeItemRecipe(IItemStack output);


//mods.immersiveengineering.Fermenter.removeByInput(IItemStack input);

```