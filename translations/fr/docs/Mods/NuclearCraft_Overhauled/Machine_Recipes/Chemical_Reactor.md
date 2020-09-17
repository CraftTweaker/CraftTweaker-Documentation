# Réacteur chimique

## Importation du paquet en cours
`mods.nuclearcraft.Réacteur chimique`

## Ajout de recettes
```zenscript
mods.nuclearcraft.ChemicalReactor.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput1, ILiquidStack fluidOutput2, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.ChemicalReactor.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.ChemicalReactor.removeRecipeWithOutput(ILiquidStack fluidOutput1, ILiquidStack fluidOutput2);
mods.nuclearcraft.Reacteur chimique. Retirer toutes les recettes ();
```