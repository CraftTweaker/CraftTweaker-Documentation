# Strahlung

## Strahlungsbrecher

### Paket wird importiert
`mods.nuclearcraft.RadiationScrubber`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, double processEfficiency);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRezept();
```

## Blockmutation

### Paket wird importiert
`mods.nuclearcraft.RadiationBlockMutation`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient-BlockInput, IIngredient-BlockOutput, doppelter Strahlungsgrenzwert);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockMutation.removeAllRezept();
```

## Reinigung blockieren

### Paket wird importiert
`mods.nuclearcraft.RadiationBlockPurifizierung`

### Rezepte hinzufügen
```zenscript
mods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient-BlockInput, IIngredient-BlockOutput, doppelter StrahlungGrenzwert);
```

### Rezepte entfernen
```zenscript
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithInput(IIngredient BlockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient BlockOutput);
mods.nuclearcraft.RadiationBlockPurification.removeAllRezept();
```

## Entitäts-Strahlung

### Strahlung
`Betrag` ist die Menge an Strahlung, die der `IEntityLivingBase` hinzugefügt wurde. `useImmunity` kontrolliert, ob die Funktion auch die `IEntityLivingBase` Immunität auftritt.
```zenscript
IEntityLivingBase::addRadiation(doppelter Betrag, @Optional boolsche Verwendung);
IEntityLivingBase::setRadiation(doppelter Betrag, @Optional boolsche Verwendung);
IEntityLivingBase::getRadiation();
```

### Radawaypuffer
`Betrag` ist der Betrag des Radaway Puffers zur `IEntityLivingBase` hinzugefügt. `slowBuffer` entscheidet, ob der Radaway Puffer ein langsamer Puffer ist.
```zenscript
IEntityLivingBase::addRadawayBuffer(doppelter Betrag, @Optional Boolean slowBuffer);
IEntityLivingBase::setRadawayBuffer(doppelter Betrag, @Optional boolean slowBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Hinweis: Wenn `slowBuffer` `true`ist, wird `getRadawayBuffer()` den langsam wirkenden Strahlenentferungs-Puffer anstelle des normalen zurückgeben.**

### Gift
`Betrag` ist die Menge an Giftpuffer, der der `IEntityLivingBase` hinzugefügt wurde.
```zenscript
IEntityLivingBase::addPoisonBuffer(double amount);
IEntityLivingBase::setPoisonBuffer(double amount);
IEntityLivingBase::getPoisonBuffer();
```

### Strahlungswiderstand
`Betrag` ist die Menge an Strahlungswiderstand, die der `IEntityLivingBase` hinzugefügt wurde.
```zenscript
IEntityLivingBase::addRadiationResistance(doppelte Anzahl);
IEntityLivingBase::setRadiationResistance(doppelte Anzahl);
IEntityLivingBase::getRadiationResistance();
```

### Strahlungspegel Getter

#### Rohe Strahlungsstufe
Diese Methode gibt die Strahlung der `IEntityLivingBase` in Runden zurück.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Strahlungsstufe
Diese Methode gibt die Änderung des Strahlenspiegels von `IEntityLivingBase` in Rads/Tick zurück.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Strahlung
Diese Methode erhält die Strahlung eines `IIngredient` in Rads/Tick.
```zenscript
mods.nuclearcraft.Radiation.getRadiationLevel (IIngredient itemInput);
```

## Straffreiheit
Diese Methode gibt die Möglichkeit, die Immunität der Spieler je nach Bühne zu kontrollieren. `defaultImmunity` ist eine boolesche Spezifikation, die die Immunität der Spieler ohne die angegebenen Stufen angibt. `stageNames` ist ein Array mit den Namen aller Stufen, die die Immunität von Spielern umschalten können.
```zenscript
mods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```