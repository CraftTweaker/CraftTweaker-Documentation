# Fission

## Fission Moderator

### Importing the Package
`mods.nuclearcraft.FissionModerator`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionModerator.add(IIngredient block, int fluxFactor, double efficiency);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();
```

## Fission Reflector

### Importing the Package
`mods.nuclearcraft.FissionReflector`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionReflector.add(IIngredient block, double efficiency, double reflectivity);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();
```

## Fission Irradiator

### Importing the Package
`mods.nuclearcraft.FissionIrradiator`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficiency, double radiation);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRecipes();
```

## Pebble Bed Fission

### Importing the Package
`mods.nuclearcraft.PebbleFission`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRecipes();
```

## Solid Fuel Fission

### Importing the Package
`mods.nuclearcraft.SolidFission`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);

```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();
```

## Fission Heating

### Importing the Package
`mods.nuclearcraft.FissionHeating`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();
```