# Radiazione
**Nota: il doppio set di parentesi `([...])` non è obbligatorio qui!**

## Radiazione
Questo metodo ottiene la radiazione di un `IIngrediente` in rads/tick.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## Mutazioni Del Blocco
Questo metodo aggiunge una mutazione di blocco. Il blocco non muterà quando la radiazione è sotto `radiazioneSoglia`.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, doppia radiazioneSoglia);
```

## Immunità Alle Radiazioni
Questo metodo dà la capacità di controllare l'immunità dei giocatori a seconda della fase. `defaultImmunity` è un booleano che specifica l'immunità dei giocatori senza le fasi specificate. `stageNames` è una serie di nomi di tutte le fasi che possono attivare o disattivare l'immunità dei giocatori.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);
```

## Impostatori Di Radiazioni

### Aggiunta Di Radiazioni
`amount` is the amount of radiation added to the `IEntityLivingBase`. `useImmunity` controlla se la funzione si verifica anche la `IEntityLivingBase` è immune.
```zenscript
IEntityLivingBase.addRadiation(doppio importo, @Optional boolean useImmunity);
```

### Impostazione Radiazione
`amount` is the level of radiation that is applied to the `IEntityLivingBase`. `useImmunity` controlla se la funzione si verifica anche la `IEntityLivingBase` è immune.
```zenscript
IEntityLivingBase.setRadiation(double amount, @Optional boolean useImmunity);
```

### Ottenere Le Radiazioni
Questo metodo restituisce il livello di radiazione della `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadiation();
```

## Radaway Buffer Getters/Setters

### Aggiungere Buffer Radaway
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `slowBuffer` decide se il Radaway Buffer aggiunto è un buffer lento.
```zenscript
IEntityLivingBase.addRadiationResistance(doppio importo, @Optional boolean slowBuffer);
```
### Impostazione Buffer Radaway
`amount` is the amount of Radaway Buffer that is applied to the `IEntityLivingBase`. `slowBuffer` decide se il Radaway Buffer aggiunto è un buffer lento.
```zenscript
IEntityLivingBase.setRadiationResistance(doppio importo, @Optional boolean slowBuffer);
```

### Ottenere Radaway Buffer
Questo metodo restituisce il Buffer Radaway della `IEntityLivingBase`. `slowBuffer` determina se il buffer lento è incluso nel valore restituito.
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional boolean slowBuffer);
```

## Buffer Di Veleno Getters/Setters

### Aggiungere Buffer Veleno
`amount` is the amount of Velison Buffer added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addPoisonBuffer(importo doppio);
```
### Impostazione Buffer Veleno
`amount` is the amount of Velison Buffer that is applied to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setPoisonBuffer(importo doppio);
```

### Ottenere Buffer Di Veleno
Questo metodo restituisce il Buffer Veleno della `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Resistenza Alle Radiazioni/Regolatori
### Aggiungere Resistenza Alle Radiazioni
`amount` is the amount of Radiation Resistance added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addRadawayBuffer(importo doppio);
```
## Impostazione Resistenza Alle Radiazioni
`amount` is the amount of Radiation Resistance that is applied to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setRadawayBuffer(importo doppio);
```

## Ottenere La Resistenza Alle Radiazioni
Questo metodo restituisce la Resistenza alle Radiazioni della `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Getters Di Livello Radiazione

### Livello Di Radiazione Cruda
Questo metodo restituisce la radiazione della `IEntityLivingBase` nei rads.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Livello Di Radiazione
Questo metodo restituisce la variazione del livello di radiazione della `IEntityLivingBase` in rads/tick.
```zenscript
IEntityLivingBase.getRadiationLevel();
```