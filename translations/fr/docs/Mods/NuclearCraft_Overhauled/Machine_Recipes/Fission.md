# Fission

## Modérateur de Fission

### Importation du paquet en cours
`mods.nuclearcraft.FissionModerator`

### Ajout de recettes
```zenscript
mods.nuclearcraft.FissionModerator.add(bloc IIngrédient, int fluxFactor, double efficacité) ;
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.
```

## Réflecteur de Fission

### Importation du paquet en cours
`mods.nuclearcraft.Réflecteur de la fiscalité`

### Ajout de recettes
```zenscript
mods.nuclearcraft.FissionReflector.add(bloc IIngrédient, double efficacité, double réflectivité) ;
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.Reflecteur Fission.removeAll();
```

## Irradiateur de Fission

### Importation du paquet en cours
`mods.nuclearcraft.Irradiateur de Fission`

### Ajout de recettes
```zenscript
mods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficacité, double radiation);
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.
```

## Fission de lit de Pebble

### Importation du paquet en cours
`mods.nuclearcraft.PebbleFission`

### Ajout de recettes
```zenscript
mods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, temps d'allumage, temps d'allumage, temps d'allumage, double efficacité, critique des intes, auto-amorçage booléen, double radiation);
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.
```

## Fission de carburant solide

### Importation du paquet en cours
`mods.nuclearcraft.Fission Solide`

### Ajout de recettes
```zenscript
mods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, temps d'allumage, temps d'allumage, chaleur d'intestin, double efficacité, critique de l'intestin, autoPriming, double radiation);

```

### Suppression des recettes
```zenscript
mods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.Supprimer toutes les recettes ();
```

## Chauffage fiscal

### Importation du paquet en cours
`mods.nuclearcraft.FissionChauffage`

### Ajout de recettes
```zenscript
mods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRecipes();
```