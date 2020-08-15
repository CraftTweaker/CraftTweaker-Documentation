# Extracteur de liquide

## Importation du paquet en cours
`mods.nuclearcraft.Extracteur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Extractor.addRecipe(IIngredient itemInput, IIngredient itemOutput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Extractor.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Extractor.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.Extractor.removeAllRecipes();
```