# Crystallizer

## Importing the Package
`mods.nuclearcraft.CrystallizerCrystallizer`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Crystallizer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Crystallizer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Crystallizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Crystallizer.removeAllRecipes();Crystallizer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Crystallizer.removeAllRecipes();
```