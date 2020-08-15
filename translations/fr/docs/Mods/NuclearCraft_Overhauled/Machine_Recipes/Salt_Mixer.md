# Mélangeur de sel

## Importation du paquet en cours
`mods.nuclearcraft.SaltMixer`

## Ajout de recettes
```zenscript
mods.nuclearcraft.SaltMixer.addRecipe(ILiquidStack fluidInput1, ILiquidStack fluidInput2, ILiquidStack fluidOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Suppression des recettes
```zenscript
mods.nuclearcraft.SaltMixer.removeRecipeWithInput(ILiquidStack fluidInput1, ILiquidStack fluidInput2);
mods.nuclearcraft.SaltMixer.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltMixer.removeAllRecipes();
```