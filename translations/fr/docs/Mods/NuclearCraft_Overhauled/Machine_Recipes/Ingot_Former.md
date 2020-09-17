# Lingot ancien

## Importation du paquet en cours
`mods.nuclearcraft.IngotFormer`

## Ajout de recettes
```zenscript
mods.nuclearcraft.IngotFormer.addRecipe(ILiquidStack fluidInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.IngotFormer.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.IngotFormer.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Enlever toutes les recettes ();
```