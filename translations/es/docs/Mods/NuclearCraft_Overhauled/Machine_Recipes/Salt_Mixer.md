# Salt Mixer

## Importing the Package
`mods.nuclearcraft.SaltMixerSaltMixer`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SaltMixer.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerSaltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.mods.nuclearcraft.SaltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.SaltMixer.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltMixer.removeAllRecipes();SaltMixer.removeAllRecipes();
```