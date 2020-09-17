# Fusion
**Note : Pas encore implémenté**

## Importation du paquet en cours
`mods.nuclearcraft.Fusion`

## Ajout de recettes
```zenscript
mods.nuclearcraft.Fusion.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4, double comboTime, double comboPower, double comboHeatVar, double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.Fusion.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.Fusion.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, ILiquidStack fluidOutput3, ILiquidStack fluidOutput4);
mods.nuclearcraft.Fusion.removeAllRecipes();
```