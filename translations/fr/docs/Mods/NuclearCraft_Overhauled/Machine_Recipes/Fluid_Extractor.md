# Fluid Extractor

## Importing the Package
`mods.nuclearcraft.Extractor`

## Adding Recipes
```zenscript
mods.nuclearcraft.Extractor.addRecipe(IIngredient itemInput, IIngredient itemOutput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Extractor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Extractor.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.Extractor.removeAllRecipes();
```