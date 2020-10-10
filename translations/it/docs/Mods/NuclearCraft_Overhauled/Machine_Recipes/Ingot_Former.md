# Ingot Former

## Importing the Package
`mods.nuclearcraft.IngotFormer`

## Adding Recipes
```zenscript
mods.nuclearcraft.IngotFormer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.IngotFormer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.IngotFormer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.IngotFormer.removeAllRecipes();
```