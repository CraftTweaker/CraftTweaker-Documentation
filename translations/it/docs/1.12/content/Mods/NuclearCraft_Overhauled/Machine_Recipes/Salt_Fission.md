# Salt Fission

## Fission Emergency Cooling

### Importing the Package
`mods.nuclearcraft.FissionEmergencyCooling`

### Adding Recipes
```zenscript
 mods.nuclearcraft.FissionEmergencyCooling.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double coolingPerInputMB); 
```

### Removing Recipes
```zenscript
mods.nuclearcraft.FissionEmergencyCooling.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionEmergencyCooling.removeRecipeWithOutput(ILiquidStack fluidOutput);
```

## Molten Salt Fission

### Importing the Package
`mods.nuclearcraft.SaltFission`

### Adding Recipes
```zenscript
mods.nuclearcraft.SaltFission.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, double baseTime, double basePower, @Optional double processRadiation);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.SaltFission.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.SaltFission.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.SaltFission.removeAllRecipes();
```

