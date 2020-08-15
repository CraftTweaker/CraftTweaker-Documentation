# Franco

## Moderador de Fission

### Importando el Paquete
`mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator.add(IIngredient block, int fluxFactor, double efficiency);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();FissionModerator.removeAll();
```

## Reflector de Fission

### Importando el Paquete
`mods.nuclearcraft.SupercoolerReflector Fission`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.SolidFissionmods.nuclearcraft.FissionReflector.add(IIngredient block, double efficiency, double reflectivity);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();FissionReflector.removeAll();
```

## Irradiador de Fission

### Importando el Paquete
`mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionIrradiator`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficiency, double radiation);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerFissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRecipes();FissionIrradiator.remover todas las recetas ();
```

## Cama de Pebble Fission

### Importando el Paquete
`mods.nuclearcraft.FissionHeatingPebbleFission`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerPebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRecipes();PebbleFission.removeAllRecipes();
```

## Petróleo Fission

### Importando el Paquete
`mods.nuclearcraft.SupercoolerSolidFission`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);

```

### Eliminando recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();
```

## Calentamiento de Fission

### Importando el Paquete
`mods.nuclearcraft.SupercoolerCalefacción de Fission`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.FissionIrradiatormods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerFissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();FissionHeating.remover todas las recetas ();
```