# Mélanger

## Importation du paquet en cours
`mods.nuclearcraft.Mélanger`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Melter.addRecipe(IIngredient itemInput, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Melter.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.Melter.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Melter.removeAllRecipes();
```