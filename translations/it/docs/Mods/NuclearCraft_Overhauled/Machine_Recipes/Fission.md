# Fissione

## Moderatore Fission

### Importazione del pacchetto
`mods.nuclearcraft.FissionModerator`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.FissionModerator.add(IIngredient block, int fluxFactor, doppia efficienza);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.FissionModerator.remove(IIngredient block);
mods.nuclearcraft.FissionModerator.removeAll();
```

## Riflettore Fissione

### Importazione del pacchetto
`mods.nuclearcraft.FissionReflector`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.FissionReflector.add(IIngredient block, doppia efficienza, doppia riflettività);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.FissionReflector.remove(IIngredient block);
mods.nuclearcraft.FissionReflector.removeAll();
```

## Irradiatore Fissione

### Importazione del pacchetto
`mods.nuclearcraft.FissionIrradiatore`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.FissionIrradiator.add(IIngredient itemInput, IIngredient itemOutput, int fluxRequired, double heatPerFlux, doppia efficienza, doppia radiazione);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.FissionIrradiator.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.FissionIrradiator.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.FissionIrradiator.removeAllRicette();
```

## Fissione Del Letto Di Pebble

### Importazione del pacchetto
`mods.nuclearcraft.PebbleFission`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.PebbleFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int calore, doppia efficienza, int criticità, boolean auto-Priming, doppia radiazione);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.PebbleFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.PebbleFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.PebbleFission.removeAllRicette();
```

## Fissione Carburante Solido

### Importazione del pacchetto
`mods.nuclearcraft.SolidFission`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.SolidFission.addRecipe(IIngredient itemInput, IIngredient itemOutput, int time, int calore, doppia efficienza, int criticità, boolean autoPriming, doppia radiazione);

```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.SolidFission.removeRecipeWithInput(IIngredient itemInput);
mods.nuclearcraft.SolidFission.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.SolidFission.removeAllRicette();
```

## Riscaldamento Fissione

### Importazione del pacchetto
`mods.nuclearcraft.FissionRiscaldamento`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.FissionHeating.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, int heatPerputMB);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.FissionHeating.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.FissionHeating.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.FissionHeating.removeAllRicette();
```