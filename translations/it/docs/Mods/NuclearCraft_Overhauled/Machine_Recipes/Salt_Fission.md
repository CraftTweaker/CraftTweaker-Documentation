# Salt Fission
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.SaltFission`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.SaltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double baseTime, double basePower, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRecipes();
```