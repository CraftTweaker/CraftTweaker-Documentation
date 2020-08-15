# Fluid Enricher

## Importing the Package
`mods.nuclearcraft.Enricher`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.Enricher.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.Enricher.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Enricher.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Enricher.removeAllRecipes();
```