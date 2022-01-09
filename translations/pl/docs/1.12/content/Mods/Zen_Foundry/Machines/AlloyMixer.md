# Alloy Mixer

A machine that can mix up to four liquids to produce one fluid output. The alloy mixer is an upgrade to the alloying crucible.

## Import
```zenscript
import mods.foundry.AlloyMixer;
```

## Methods
```zenscript
// Adds a recipe with input liquids and an output liquid to the alloy mixer
AlloyMixer.addRecipe(ILiquidStack output, ILiquidStack[] inputs);

// Removes a recipe with the given inputs from the alloy mixer
AlloyMixer.removeRecipe(ILiquidStack[] inputs);

// Clears all recipes from the alloy mixer
AlloyMixer.clear();
```
