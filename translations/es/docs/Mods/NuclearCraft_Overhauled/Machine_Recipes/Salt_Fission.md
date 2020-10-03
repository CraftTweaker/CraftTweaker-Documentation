# Salt Fission
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.SaltFissionSaltFission`

## Adding Recipes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.SaltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double baseTime, double basePower, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRecipes();SaltFission.removeAllRecipes();
```