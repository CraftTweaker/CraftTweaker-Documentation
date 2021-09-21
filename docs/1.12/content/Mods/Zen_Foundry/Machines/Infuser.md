# Metal Infuser

A machine that can infuse liquids with substances by using energy.

## Import
```zenscript
import mods.foundry.Infuser;
```

## Methods
```zenscript
// Adds a recipe with input liquid, substance to be infused with, energy required to infuse the substance, and an output liquid to the metal infuser
Infuser.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient substance, int energy);

// Removes a recipe with the given input liquid and substance from the metal infuser
Infuser.removeRecipe(ILiquidStack input, IItemStack substance);

// Clears all recipes from the metal infuser
Infuser.clear();
```
