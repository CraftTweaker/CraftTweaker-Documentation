# Chemical Reactor

## Importing the Package
`mods.nuclearcraft.ChemicalReactor`

## Adding Recipes
```zenscript
mods.nuclearcraft.ChemicalReactor.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.ChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.ChemicalReactor.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2);
mods.nuclearcraft.ChemicalReactor.removeAllRecipes();
```