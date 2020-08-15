# Fluid Enricher

## Importing the Package
`mods.nuclearcraft.EnricherEnricher`

## Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Enricher.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerEnricher.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Enricher.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Enricher.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Enricher.removeAllRecipes();Enricher.removeAllRecipes();
```