# Infuser

## Importing the Package
`mods.nuclearcraft.Infuser`

## Dodawanie przepisów
```zenscript
mods.nuclearcraft.Infuser.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Usuwanie przepisów
```zenscript
mods.nuclearcraft.Infuser.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Infuser.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Infuser.removeAllRecipes();
```