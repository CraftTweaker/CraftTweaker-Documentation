# Fission

## Fission Moderator

### Importing the Package
`mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator.add(IIngredient block, int fluxFactor, double efficiency);
```

### レシピを削除
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();FissionModerator.removeAll();
```

## Fission Reflector

### Importing the Package
`mods.nuclearcraft.SupercoolerFissionReflector`

### レシピを追加中
```zenscript
mods.nuclearcraft.SolidFissionmods.nuclearcraft.FissionReflector.add(IIngredient block, double efficiency, double reflectivity);
```

### レシピを削除
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();FissionReflector.removeAll();
```

## Fission Irradiator

### Importing the Package
`mods.nuclearcraft.SupercoolerFissionIrradiator`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficiency, double radiation);
```

### レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerFissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRecipes();FissionIrradiator.removeAllRecipes();
```

## Pebble Bed Fission

### Importing the Package
`mods.nuclearcraft.FissionHeatingPebbleFission`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);
```

### レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerPebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRecipes();PebbleFission.removeAllRecipes();
```

## Solid Fuel Fission

### Importing the Package
`mods.nuclearcraft.SupercoolerSolidFission`

### レシピを追加中
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int heat, double efficiency, int criticality, boolean selfPriming, double radiation);

```

### レシピを削除
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRecipes();
```

## Fission Heating

### Importing the Package
`mods.nuclearcraft.SupercoolerFissionHeating`

### レシピを追加中
```zenscript
mods.nuclearcraft.FissionIrradiatormods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### レシピを削除
```zenscript
mods.nuclearcraft.SupercoolerFissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();FissionHeating.removeAllRecipes();
```