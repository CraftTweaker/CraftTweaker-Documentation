# Fission

## Fission Moderator

### Importing the Package
`mods.nuclearcraft.FissionModerator`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.FissionModerator.add(IIngredient block, int fluxFactor, double efficiency);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();
```

## Fission Reflector

### Importing the Package
`mods.nuclearcraft.FissionReflector`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.FissionReflector.add(IIngredient block, double efficiency, double reflectivity);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();
```

## Fission Irradiator

### Importing the Package
`mods.nuclearcraft.FissionIrradiator`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficiency, double radiation);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRecipes();
```

## Pebble Bed Fission

### Importing the Package
`mods.nuclearcraft.PebbleFission`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRecipes();
```

## Solid Fuel Fission

### Importing the Package
`mods.nuclearcraft.SolidFission`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);

```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();
```

## Fission Heating

### Importing the Package
`mods.nuclearcraft.FissionHeating`

### Dodawanie przepisów
```zenscript
mods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### Usuwanie przepisów
```zenscript
mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();
```