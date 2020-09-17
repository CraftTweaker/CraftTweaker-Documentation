# Radiazione

## Scrubber Per Radiazioni

### Importazione del pacchetto
`mods.nuclearcraft.RadiationScrubber`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, doppio processoEfficienza);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRicette();
```

## Mutazione Blocco

### Importazione del pacchetto
`mods.nuclearcraft.RadiationBlockMutation`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockMutation.removeAllRicette();
```

## Purificazione Del Blocco

### Importazione del pacchetto
`mods.nuclearcraft.RadiationBlockPurification`

### Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Rimozione Ricette
```zenscript
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockPurification.removeAllRicette();
```

## Radiazione Dell'Entità

### Radiazione
`amount` is the amount of radiation added to the `IEntityLivingBase`. `useImmunity` controlla se la funzione si verifica anche la `IEntityLivingBase` è immune.
```zenscript
IEntityLivingBase::addRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase::setRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase::getRadiation();
```

### Buffer Radaway
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `slowBuffer` decide se il Radaway Buffer aggiunto è un buffer lento.
```zenscript
IEntityLivingBase::addRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::setRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Nota: se `slowBuffer` è `true`, `getRadawayBuffer()` restituirà il buffer di rimozione delle radiazioni ad azione lenta invece di quello normale.**

### Veleno
`amount` is the amount of Velison Buffer added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addPoisonBuffer(doppio importo);
IEntityLivingBase::setPoisonBuffer(doppio importo);
IEntityLivingBase::getPoisonBuffer();
```

### Resistenza Alle Radiazioni
`amount` is the amount of Radiation Resistance added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addRadiationResistance(doppia quantità);
IEntityLivingBase::setRadiationResistance(doppia quantità);
IEntityLivingBase::getRadiationResistance();
```

### Getters Di Livello Radiazione

#### Livello Di Radiazione Cruda
Questo metodo restituisce la radiazione della `IEntityLivingBase` nei rads.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Livello Di Radiazione
Questo metodo restituisce la variazione del livello di radiazione della `IEntityLivingBase` in rads/tick.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Radiazione
Questo metodo ottiene la radiazione di un `IIngrediente` in rads/tick.
```zenscript
mods.nuclearcraft.Radiation.getRadiationLevel(IIngredient itemInput);
```

## Immunità Alle Radiazioni
Questo metodo dà la capacità di controllare l'immunità dei giocatori a seconda della fase. `defaultImmunity` è un booleano che specifica l'immunità dei giocatori senza le fasi specificate. `stageNames` è una serie di nomi di tutte le fasi che possono attivare o disattivare l'immunità dei giocatori.
```zenscript
mods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```