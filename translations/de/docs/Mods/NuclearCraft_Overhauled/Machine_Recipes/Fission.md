# Spaltung

## Spaltmoderator

### Paket wird importiert
`mods.nuclearcraft.FissionModerator`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionModerator.add(IInter Block, Int FluxFactor, doppelte Effizienz);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionModerator.remove(IIngredient Block);
mods.nuclearcraft.FissionModerator.removeAll();
```

## Spaltreflektor

### Paket wird importiert
`mods.nuclearcraft.FissionReflektor`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionReflector.add(Igredient Block, doppelte Effizienz, doppelte Reflectivität);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionReflector.remove(Igredient Block);
mods.nuclearcraft.FissionReflector.removeAll();
```

## Spaltbestrahler

### Paket wird importiert
`mods.nuclearcraft.Spaltstrahler`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, double efficacion, double radiation);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRezept();
```

## Pebbelbett-Zersetzung

### Paket wird importiert
`mods.nuclearcraft.PebbleFission`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int Zeit, Int Hitze, doppelte Effizienz, Int Kritik, boolean selfPriming, double radiation);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRezept();
```

## Festbrennstoffspaltung

### Paket wird importiert
`mods.nuclearcraft.Solidspaltung`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int Zeit, Int Hitze, doppelte Effizienz, Int Kritik, boolean selfPriming, double radiation);

```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRezept();
```

## Spaltheizung

### Paket wird importiert
`mods.nuclearcraft.Spaltheizung`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerInputMB);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRezept();
```