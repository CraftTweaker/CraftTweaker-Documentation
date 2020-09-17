# Extractor de fluidos

## Importando el Paquete
`mods.nuclearcraft.ExtractorExtractor`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Extractor.addRecipe(IIngredient itemInput, IIngredient itemOutput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerExtractor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.Extractor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Extractor.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.Extractor.removeAllRecipes();Extractor.removeTodos();
```