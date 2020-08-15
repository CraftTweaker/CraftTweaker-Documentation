# Fission

## Fission Moderator

### Importing the Package
`mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator`

### Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator.add(IIngredient block, int fluxFactor, double efficiency);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();FissionModerator.removeAll();
```

## Fission Reflector

### Importing the Package
`mods.nuclearcraft.SupercoolerFissionReflector`

### Adding Recipes
```zenscript
mods.nuclearcraft.SolidFissionmods.nuclearcraft.FissionReflector.add(IIngredient block, double efficiency, double reflectivity);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();FissionReflector.removeAll();
```

## Fission Irradiator

### Importing the Package
`mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionIrradiator`

### Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficiency, double radiation);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerFissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRecipes();FissionIrradiator.removeAllRecipes();
```

## Pebble Bed Fission

### Importing the Package
`mods.nuclearcraft.FissionHeatingPebbleFission`

### Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerPebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRecipes();PebbleFission.removeAllRecipes();
```

## Solid Fuel Fission

### Importing the Package
`mods.nuclearcraft.SupercoolerSolidFission`

### Adding Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);

```

### Removing Recipes
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();
```

## Fission Heating

### Importing the Package
`mods.nuclearcraft.SupercoolerFissionHeating`

### Adding Recipes
```zenscript
mods.nuclearcraft.FissionIrradiatormods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.SupercoolerFissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();FissionHeating.removeAllRecipes();
```