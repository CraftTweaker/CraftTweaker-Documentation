# Enricher fluido

## Importando el Paquete
`mods.nuclearcraft.EnricherEnricher`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Enricher.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerEnricher.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.Enricher.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.Enricher.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Enricher.removeAllRecipes();Enricher.removeAllRecipes();
```