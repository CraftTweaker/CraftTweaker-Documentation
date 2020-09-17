# Électrolyseur

## Importation du paquet en cours
`mods.nuclearcraft.Électrolyseur`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Electrolyser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double powerMultiplier @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Electrolyser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Electrolyser.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Electrolyser.removeAllRecipes();
```